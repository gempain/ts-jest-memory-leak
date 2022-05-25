import 'reflect-metadata';
import { initDb } from './init-db';

let connection;

beforeAll(async () => {
  connection = await initDb();
});

afterAll(async () => {
  await connection.close();
  // const manager = getConnectionManager();
  // manager.connections.forEach(conn => {
  //   Object.keys(conn).forEach(k => {
  //     delete conn[k];
  //   });
  // });
});

it('should return profile', async () => {
  expect(true).toBeTruthy();
});
