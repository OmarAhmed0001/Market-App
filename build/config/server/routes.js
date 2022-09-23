"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_routes_1 = __importDefault(require("../../routes/user-routes"));
var product_routes_1 = __importDefault(require("../../routes/product-routes"));
var dashboard_routes_1 = __importDefault(require("../../routes/dashboard-routes"));
exports.default = (function (app) {
    app.use('/users', user_routes_1.default);
    app.use('/products', product_routes_1.default);
    app.use('/dashboard', dashboard_routes_1.default);
});
