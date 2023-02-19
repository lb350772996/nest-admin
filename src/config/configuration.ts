import { join } from "path";

export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
     type: 'mysql',
     host: process.env.DATABASE_HOST ,//|| 'localhost',
     port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
     username: process.env.DATABASE_USER  ,//'root',
     password: process.env.DATABASE_PASSWORD,
     database: 'mineadmin',
     entities : [join(__dirname,'../','**/**.entity{.ts,.js}')],
     synchronize: true,
    }
}) 