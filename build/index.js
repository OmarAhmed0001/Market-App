"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var main_1 = __importDefault(require("./config/server/main"));
exports.app = (0, express_1.default)();
var address = '0.0.0.0:3000';
var port = 3000;
// (async()=>{})()
// const app: express.Application = express()
exports.app.use(body_parser_1.default.json());
(0, main_1.default)(exports.app);
exports.app.get('/', function (req, res) {
    res.send('Hello World!');
});
exports.app.listen(port, function () {
    console.log("starting app on: ".concat(address));
});
exports.default = exports.app;
