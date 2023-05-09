const express = require("express");
const app = express();
const connection = require("./db/connection");
const user = require("./db/usermodel");
const cors = require("cors");

/*{"firstname": "adarsh",
    "lastname": "verma",
    "email": "piyush3345@gmail.com",
    "dob":"2002-12-09",
    "mobile": 77050565768,
    "password": "123"} */
app.use(express.json());
app.use(cors());

app.post("/register", async (req, resp) => {
  let record = await new user(req.body);
  let result = await record.save();
  resp.send(result);
});

app.listen(5000);
