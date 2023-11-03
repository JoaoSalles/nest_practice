import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import {DataSourceOptions} from 'typeorm';

config();

console.log("__dirname", __dirname)

export const nestConfig: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,  
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: [__dirname + '/src/@core/infra/db/*.schema{.ts,.js}'],
    // entities: ['./src/@core/infra/db/*.schema{.ts,.js}'],
    migrations: [__dirname + "/@core/infra/db/migrations/*{.ts,.js}"],
    migrationsTableName: "migrations_typeorm",    
    migrationsRun: true,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
};
  
 
export default new DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    entities: ['./src/@core/infra/db/*.schema{.ts,.js}'],
    migrations: ['./src/@core/infra/db/migrations/*{.ts,.js}'],
    migrationsTableName: "migrations_typeorm",    
    migrationsRun: true,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
});