import { config } from 'dotenv';
import { Neo4jConfig } from '../modules/neo4j/interfaces/neo4j-config.interface';

config({ path: process.env.NODE_ENV === 'production' ? '.env.prod' : '.env' });

export const DATABASE_CONFIG: Neo4jConfig = {
  scheme: 'bolt',
  host: 'localhost',
  port: 7687,
  username: 'neo',
  password: 'neo',
};