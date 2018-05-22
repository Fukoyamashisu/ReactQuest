const db = require(`../models/index.js`);


/**
 * [AuthController description]
 * @class AuthController
 */


class AuthController {
  /**
   * [signUp description]
   * @param  {[type]} req [request]
   * @param  {[type]} res [response]
   * @return {[type]} string [""]
   */
  signUp(req,res){
    const { checkPassword, ...user } = req.body;
    db.users.create(user).then(user => res.redirect("/auth"));
  }
  /**
   * [show description]
   * @param {[type]} req 
   * @param {[type]} res 
   */
  show(req,res){
    db.users.findAll().then(users => res.json(users));
  }

}


module.exports = AuthController;
