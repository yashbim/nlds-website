// lib/db-utils.ts
import { yugabyteDB } from './yugabyte';

export async function queryDatabase<T = any>(
  query: string, 
  params: any[] = []
): Promise<T[]> {
  const client = await yugabyteDB.connect();
  
  try {
    const result = await client.query(query, params);
    return result.rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  } finally {
    client.release();
  }
}

export async function queryDatabaseSingle<T = any>(
  query: string, 
  params: any[] = []
): Promise<T | null> {
  const results = await queryDatabase<T>(query, params);
  return results.length > 0 ? results[0] : null;
}

// Health check function
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    await queryDatabase('SELECT 1');
    return true;
  } catch {
    return false;
  }
}