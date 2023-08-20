import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';

config();


export const testDbConfig = {
  type: 'sqlite',
  database: `db.test.sqlite`,
  entities: [__dirname + '/entities/*.entity{.js,.ts}',__dirname + '/entities/*/*.entity{.js,.ts}'],
  //[__dirname+'/../../dist/**/entities/*.entity{.js,.ts}'], //[__dirname + '/entities/*.entity{.js,.ts}'],
  migrations: [__dirname + '/../../dist/database/migrations/*.js'],
  logging: false,

  synchronize: true,
  retryAttempts: 10,
};

console.log('process.env.NODE_ENV', process.env.NODE_ENV);

export default new DataSource(testDbConfig as DataSourceOptions);
