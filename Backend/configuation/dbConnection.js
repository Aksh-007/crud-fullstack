const mongoose = require("mongoose");
const MONGODB_URL = process.env.MONGODB_URL
const connectToDB = () => {
  mongoose
    .connect(MONGODB_URL)
    .then((conn) => {
      console.log(`Connected DB: ${conn.connection.host}`);
    })
    .catch((err) => {
      console.log(err.message);
      process.exit(1);
    });
};

module.exports = connectToDB;
