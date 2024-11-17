import { Module } from '@nestjs/common';
import { databaseProviders } from '../common/database/database.providers';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders], // Export Sequelize instance for other modules
})
export class DatabaseModule {}
