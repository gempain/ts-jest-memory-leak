import { createConnection } from 'typeorm';

export async function initDb() {
  return createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [],
  });
}
