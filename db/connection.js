const mongoose = require("mongoose");

url = "mongodb://127.0.0.1:27017/dashboard";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
