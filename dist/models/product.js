"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Product = connection_1.default.define("product", {
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    stock: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
    },
    obs: {
        type: sequelize_1.DataTypes.TEXT,
    },
    postOn: {
        type: sequelize_1.DataTypes.JSON,
    },
    hide: {
        type: sequelize_1.DataTypes.NUMBER,
    },
    dueDate: {
        type: sequelize_1.DataTypes.DATE,
    }
}, {
    createdAt: false,
    updatedAt: false,
});
exports.default = Product;
