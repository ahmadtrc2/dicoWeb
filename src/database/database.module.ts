import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { developmentDbConfig } from "./developmentDatasource.config"
import { testDbConfig } from "./testDatasource.config"

const databaseConfigurations = {
  "development": developmentDbConfig,
  "test": testDbConfig
}

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => (databaseConfigurations[process.env.NODE_ENV]),
    }),
  ],
  providers:[]
})
class DatabaseModule {}

export default DatabaseModule;
