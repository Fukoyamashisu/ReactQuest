const express = require('express');
const router = express.Router();
const passport = require('passport');
const { signToken } = require('../middlewares/jwt');

const AuthController = require("../controllers/AuthController");
const controller = new AuthController();


router.get('/all', (req,res) => controller.show(req,res));
router.post("/signup", (req,res) => controller.signUp(req,res));
router.post("/signin",(req,res) => { 
    passport.authenticate('users',(err,user,info) => {
        if (err) return res.status(500).send(err)
        if (!user) return res.status(400).json({ flash: info.message });
        const token = signToken(user);
        res.json({ user,token }); 
    })(req, res);
});







module.exports = router;
