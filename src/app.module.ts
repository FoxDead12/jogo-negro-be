import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DI } from './services/DI';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'typeorm.config';
import { DataSource } from 'typeorm';
import { SpaceController } from './controllers/space.controller';
import { ServiceController } from './controllers/services.controller';

@Module({
  imports: [TypeOrmModule.forRoot(config)],
  controllers: [UserController, SpaceController, ServiceController],
  providers: [DI],
})

export class AppModule {
  constructor(DI: DI, dataSource: DataSource) {

    DI.Build(dataSource);
  }
}
