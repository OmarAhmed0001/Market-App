"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hash_password = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var hash_password = function (password) {
    var hashed_password = bcrypt_1.default.hashSync(password + process.env.BCRYPT_PASSWORD, parseInt(process.env.SALT_ROUNDS));
    return hashed_password;
};
exports.hash_password = hash_password;
