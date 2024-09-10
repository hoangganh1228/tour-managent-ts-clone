import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  'tour_management_b7_1',
  'root',
  '',
  {
    host: 'localhost', // Database host (e.g., localhost)
    dialect: 'mysql', // Dialect to use (e.g., mysql, postgres, etc.)
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connect Success!");
  })
  .catch((error) => {
    console.error("Connect Error: ", error);
  });

export default sequelize;