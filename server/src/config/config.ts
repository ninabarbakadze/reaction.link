import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 1337;
const DB_PORT = process.env.DB_PORT || 27017;
const DB_NAME = process.env.DB_NAME || 'test';
const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000';

const SERVER = {
  hostname: SERVER_HOSTNAME,
  port: SERVER_PORT
};

const DB = {
  port: DB_PORT,
  name: DB_NAME
};

const CLIENT = {
  url: CLIENT_URL
};

const config = {
  server: SERVER,
  db: DB,
  client: CLIENT
};

export default config;
