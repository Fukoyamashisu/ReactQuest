const JWT = require('jsonwebtoken');
const secret = "fHt67hHRIOP89Fghsqjgd6876455hgfghfhksjdhqg>FGHFFHGsqd,shjsghdhjgHHxGHUsere";



//Return a token (life for 7 days) with user informations 
const signToken = (user) => {
    return JWT.sign({user:{id:user.id, name:user.name, email:user.email}}, secret, { expiresIn: "1 days"})
}

//return informations of a user inside the token 
const decodeToken = (token) => {
    return JWT.verify(token, secret, (err, decode) => {
        if(err) console.log(err);
        return decode; 
    })
}


module.exports={decodeToken, signToken,secret};