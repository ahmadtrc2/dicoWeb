import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();


export const developmentDbConfig = {
  type: 'sqlite',
  database: `db.sqlite`,
  entities: [__dirname + '/entities/*.entity{.js,.ts}' , __dirname + '/entities/*/*.entity{.js,.ts}'],
  migrations: [__dirname + '/../../dist/database/migrations/*.js'],
  synchronize: false,
  logging: false,
  retryAttempts: 10,
};

export default new DataSource(developmentDbConfig as DataSourceOptions);
