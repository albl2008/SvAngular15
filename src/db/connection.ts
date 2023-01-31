import { Sequelize } from "sequelize";

const sequelize = new Sequelize("meanproducts", "root", "locolope", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;