import { DataTypes } from "sequelize";
import db from "../db/connection";

const Product = db.define(
  "product",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    stock: {
      type: DataTypes.NUMBER,
    },
    type: {
      type: DataTypes.STRING,
    },
    obs: {
      type: DataTypes.TEXT,
    },
    postOn:{
      type: DataTypes.JSON,
    },
    hide:{
      type:DataTypes.NUMBER,
    },
    dueDate:{
      type:DataTypes.DATE,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  }
);

export default Product;