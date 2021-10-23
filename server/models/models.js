const seqielize = require("../db");
const { DataTypes } = require("sequelize");

const User = seqielize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  roles: { type: DataTypes.STRING, defaultValue: "USER" },
});
