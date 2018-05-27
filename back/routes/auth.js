const express = require('express');
const router = express.Router();


const AuthController = require("../controllers/AuthController");
const controller = new AuthController();


router.get('/all', (req,res) => controller.show(req,res));
router.post("/signup", (req,res) => controller.signUp(req,res));
router.post("/signin", (req, res) => controller.signIn(req, res));





module.exports = router;
