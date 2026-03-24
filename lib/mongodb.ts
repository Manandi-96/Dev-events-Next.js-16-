import mongoose, { ConnectOptions } from 'mongoose';

type CachedMongoose = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

declare global {
  // Persist the cache across module reloads in dev/HMR.
  var mongooseCache: CachedMongoose | undefined;
}

// Keep the connection strict and predictable in production and tests.
const connectionOptions: ConnectOptions = {
  bufferCommands: false,
  serverSelectionTimeoutMS: 5000,
  appName: 'dev-events-next-app',
};

// Reuse the global cache if it exists (prevents creating extra connections).
const cache: CachedMongoose = globalThis.mongooseCache ?? {
  conn: null,
  promise: null,
};

// Store the cache on the global object for hot-reload safety.
if (!globalThis.mongooseCache) {
  globalThis.mongooseCache = cache;
}

function getMongoUri(): string {
  const value = process.env.MONGODB_URI;

  if (!value) {
    throw new Error('Missing MONGODB_URI environment variable');
  }

  return value;
}

/**
 * Establishes (or reuses) a mongoose connection that survives multiple module reloads.
 */
export async function connectToDatabase(): Promise<typeof mongoose> {
  if (cache.conn) {
    return cache.conn;
  }

  if (!cache.promise) {
    // Resolve lazily so builds/tests that don't touch the DB don't throw.
    const uri = getMongoUri();
    // First caller starts the connection; others await the same promise.
    cache.promise = mongoose.connect(uri, connectionOptions);
  }

  try {
    cache.conn = await cache.promise;
  } catch (error) {
    // Reset the promise so a later call can retry after a failure.
    cache.promise = null;
    throw error;
  }
  return cache.conn;
}
