const db = require(`../models/index.js`);
const { hashPassword } = require('../middlewares/bcryptPassword');

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
    const { checkPassword, ...currentUser } = req.body;
    const user = hashPassword(currentUser, currentUser.password);
    user.then(user => {
      db.users.create(user).then(user => {
        res.status(200).json({ flash: "User has been signed up !", status: 200 });
      }).catch(err => res.status(500).json({ flash: err.message }));
    }) 
  }

}


module.exports = AuthController;
