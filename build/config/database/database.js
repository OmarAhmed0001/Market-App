"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var pg_1 = require("pg");
//initialize the environment variables the .env can not be used without it
dotenv_1.default.config();
var _a = process.env, POSTGRES_HOST = _a.POSTGRES_HOST, POSTGRES_DB = _a.POSTGRES_DB, POSTGRES_TEST_DB = _a.POSTGRES_TEST_DB, POSTGRES_USERNAME = _a.POSTGRES_USERNAME, POSTGRES_PASSWORD = _a.POSTGRES_PASSWORD, NODE_ENV = _a.NODE_ENV;
// console.log('data base name:',NODE_ENV==='test'?POSTGRES_TEST_DB:POSTGRES_DB);
var client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: NODE_ENV === 'test' ? POSTGRES_TEST_DB : POSTGRES_DB,
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
});
exports.default = client;
