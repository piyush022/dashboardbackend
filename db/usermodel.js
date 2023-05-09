const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, trim: true, required: true },
    lastname: { type: String, trim: true, required: true },
    dob: { type: Date, required: true, min: "1900-01-01", max: Date.now },
    email: { type: String, trim: true, required: true },
    mobile: { type: Number, trim: true, required: true },
    password: { type: String, trim: true, required: true },
  },
  { timestamps: true }
);

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;
