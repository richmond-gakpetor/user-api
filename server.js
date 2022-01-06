require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userController = require("./controllers/userController");

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).json({ msg: "Welcome to richmond-user-API" });
});
app.post("/user", userController.addUser);
app.get("/user", userController.getUsers);

const PORT = process.env.PORT || 8000;

app.listen(8000, function () {
  console.log("Server is running...");
  mongoose
    .connect(process.env.LOCAL_DB)
    .then(function () {
      console.log("DB is connected");
    })
    .catch(function (error) {
      console.log("DB is not connected: ", error.message);
    });
});
