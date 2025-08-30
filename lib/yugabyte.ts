// lib/yugabyte.ts
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.YUGABYTE_DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? {
    rejectUnauthorized: false,
    ca: process.env.YUGABYTE_CA_CERT, // Optional: if you have the CA certificate
  } : {
    rejectUnauthorized: false // For development
  },
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
});

// Test the connection
pool.on('connect', () => {
  console.log('Connected to YugabyteDB Aeon');
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export { pool as yugabyteDB };