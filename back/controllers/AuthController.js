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
    db.users.create(user).then(user => {
      res.status(200).json({ flash:  "User has been signed up !",status:200 });
    }).catch(err => res.status(500).json({ flash:  err.message }));
  }
  /**
   * [show description]
   * @param {[type]} req 
   * @param {[type]} res 
   */
  show(req,res){
    db.users.findAll().then(users => res.json(users));
  }


  signIn(req,res){
    const {email,password} = req.body;
    db.users.findOne({where:{email}}).then(user =>{
      if(!user) res.status(401).json({flash:"Mauvais Email",status:401})
      else if (user.password !== password) res.status(401).json({ flash: "Mauvais mot de passe", status: 401});
      else res.status(200).json({ flash: "Connected", user, status: 200})
    }).catch(err => res.status(500).json({ flash: err.message, status: 500 }));
  }

}


module.exports = AuthController;
