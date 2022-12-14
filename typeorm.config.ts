import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { list as listDtos } from './src/dtos/listDtos';

export const config: TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'jogonegro',
    entities: listDtos,
    synchronize: false,
    logging: false
}

export const connectionSource = new DataSource({
    migrationsTableName: 'migrations',
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'jogonegro',
    logging: false,
    synchronize: false,
    name: 'default',
    entities: listDtos,
    migrations: ['src/dtos/migrations/*.ts'],
});