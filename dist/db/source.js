"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = exports.ormconfig = void 0;
const typeorm_1 = require("typeorm");
const { resolve } = require('path');
require('dotenv').config({ path: resolve(__dirname, '../../.env') });
exports.ormconfig = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: false,
    logging: true,
    entities: [resolve(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [resolve(__dirname, 'migrations/*.ts')],
    subscribers: [],
};
exports.AppDataSource = new typeorm_1.DataSource(exports.ormconfig);
//# sourceMappingURL=source.js.map