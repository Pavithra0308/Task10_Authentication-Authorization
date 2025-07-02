const express = require("express");
const router = express.Router();
const verifyToken = require("../authorization_middleware");
const { register, login, getUserInfo } = require("../controllers/authController");

router.post("/register", register);
router.post("/login", login);
router.get("/user", verifyToken, getUserInfo);

module.exports = router;