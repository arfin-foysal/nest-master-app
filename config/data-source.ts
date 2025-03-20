import { DataSource, DataSourceOptions } from "typeorm";
import { config as dotenvConfig } from "dotenv";


// Load environment variables
dotenvConfig({ path: '.env' });

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3306', 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: [__dirname + "/../src/database/migrations/*{.ts,.js}"],
    synchronize: process.env.NODE_ENV === 'development',
    logging: process.env.NODE_ENV === 'development',
}

const dataSource = new DataSource(dataSourceOptions)
export default dataSource