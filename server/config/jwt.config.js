const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET_KEY;

// BL: Middleware authenticate function to check the usertoken cookie inside of the cookie object of the request with the secret used. The in a callback function, it receives errors and a payload (the information stored in the cookie).
module.exports.authenticate = (req,res,next) => {
    jwt.verify(req.cookies.usertoken, SECRET, (err, payload) => {
        if(err) {
            res.status(401).json({verified: false});
        }
        else{
            next()
        }
    });
}