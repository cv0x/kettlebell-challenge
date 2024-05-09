const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

const test = (req, res) => {
  res.json("test");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //check if name was entered
    if (!name) {
      return res.json({ error: "Name is required" });
    }

    //check if password was entered
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and has to be 6 characters or more",
      });
    }

    //check if email was entered
    const exist = await User.findOne({ email });
    if (exist) {
      return res.json({ error: "Email already exists" });
    }

    const hashedPassword = await hashPassword(password);
    //create user in db
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const loginUser = (req, res) => {};

module.exports = {
  test,
  registerUser,
};
