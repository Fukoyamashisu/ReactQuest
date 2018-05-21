const express = require('express');
const router = express.Router();


const AuthController = require("../controllers/AuthController");
const controller = new AuthController();


router.post("/signup", (req,res) => controller.signUp(req,res));






module.exports = router;
