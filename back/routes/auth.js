const express = require('express');
const router = express.Router();


const AuthController = require("../controllers/AuthController");
const controller = new AuthController();


router.get('/', (req,res) => controller.show(req,res));
router.post("/signup", (req,res) => controller.signUp(req,res));






module.exports = router;
