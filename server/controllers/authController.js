const User =require("../models/user")

const test = (req, res) => {
    res.json("test")
}

const registerUser = async(req, res) => {
    try {
      const { name, email, password } = req.body;
      //check if name was entered
      if (!name) {
        return res.json({ status: "error", error: "Name is required" });
      }

      //check if password was entered
      if (!password || password.length < 6) {
        return res.json({
          status: "error",
          error: "Password is required and has to be 6 characters or more",
        });
      }

      //check if email was entered
      const exist = await User.findOne({ email });
      if (exist) {
        return res.json({ status: "error", error: "Email already exists" });
      }

      const user = await User.create({ name, email, password });
      return res.json({ status: "ok", user });

    } catch (error) {
        console.log(error)
    }
}

const loginUser = (req, res) => {}


module.exports = { 
    test, 
    registerUser, 
    loginUser
}