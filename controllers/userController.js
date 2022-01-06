const User = require("../models/User");

async function addUser(req, res) {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log("can't add user: ", error.message);
    res.status(401).json({ msg: "can't add user" });
  }
}

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.log("Can't get users: ", error.message);
  }
}

module.exports = {
  addUser,
  getUsers,
};
