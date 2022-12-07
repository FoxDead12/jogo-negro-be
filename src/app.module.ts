import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { DI } from './services/DI';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'typeorm.config';
import { DataSource } from 'typeorm';
import { SpaceController } from './controllers/space.controller';
import { ServiceController } from './controllers/services.controller';
import { FilesController } from './controllers/files.controller';
import { MulterModule } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    MulterModule.register({
      storage: memoryStorage()
    }),
  ],
  controllers: [UserController, SpaceController, ServiceController, FilesController],
  providers: [DI],
})

export class AppModule {
  constructor(DI: DI, dataSource: DataSource) {

    DI.Build(dataSource);
  }
}
