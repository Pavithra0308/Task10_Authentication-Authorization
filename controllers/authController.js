const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../model/User_Schema");

exports.register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await user.save();

    res.status(200).json({
      message: "User Registered Successfully",
    });
  } catch (error) {
    console.error("Registration Error:", error.message);
    res.status(500).json({
      message: "Something went wrong",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      { id: user._id, role: "user" },
      process.env.JWT_KEY,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login Successful", token });
  } catch (error) {
    console.error("Login Error:", error.message);
    res.status(500).json({ message: "Login Failed" });
  }
};

exports.getUserInfo = async (req, res) => {
  try {
    console.log("User Info:", req.user,req.token);
    res.status(200).json({
      message: "User Information retrieved Successfully",
      user: req.user,
      token: req.token
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve User Information" });
  }
};