import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sequelize } from 'sequelize';
import { initializeModels } from './index'; // Path to your centralized models initialization
import { SequelizeModule } from '@nestjs/sequelize';
import { EavAttributeLabel } from './entities/eav-attribute-label.entity';
import { DatabaseModule } from './common/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './environment/.env',
    }),
    DatabaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
