const User = require("../models/user.model");
const jwt = require("jsonwebtoken");  //BL: Bringing in the jsonwebtoken package to create and use these tokens.
const secret = process.env.SECRET_KEY  //BL: Retrieving values from the .env object.
const bcrypt = require('bcrypt');  //BL: Bringing in bcrypt to hash the password provided in the login form.

module.exports = {
    // BL: Register User function
    register: async (req, res) => {
        // BL: Wrapped async code in a try/catch in case the promise is rejected and to avoid app crashing.
        try{
            const potentialUser = await User.findOne({email: req.body.email})  //BL: Checking the database to see if the email given on the registration form already exists.
            if (potentialUser) {
                res.status(400).json({message: "Email already exists."});
            } //BL: If it already exists, it will cause an error and send a message to let them know.
            else {
                const newUser = await User.create(req.body); //BL: If email doesn't already exist, creating a new User object using the form data given and saving it to a newUser variable.
                const userToken = jwt.sign({_id:newUser.id, firstName: newUser.firstName, email:newUser.email}, secret, {expiresIn: "1d"}); //BL: Creating a new JSON web token by creating an object that represents the payload (generally the user id), using the secret key to make sure our token isn't tampered with, along with a timeline of when we want the token to expire.
                // BL: Below code is setting a cookie to our newUser.
                res.cookie("usertoken", userToken, {
                    httpOnly: true
                }).json({message: "Success!", user: newUser});
            }
        } catch(err) {
            return res.status(400).json(err);
        }
    },

    login: async (req, res) => {
        try{
            const user = await User.findOne({email: req.body.email});  //BL: Checking the database to see if the email given on the login form exists.
            if (user) {
                const passwordMatch = await bcrypt.compare(req.body.password, user.password);  //BL: If email/user does exist, hash password provided in login form and compare to the hashed password in the database for the email given.
                if (passwordMatch) {
                    // If passwords match, assign a JSON web token and set a cookie to the User.
                    const userToken = jwt.sign({_id:user.id, firstName: user.firstName, email:user.email}, secret, {expiresIn: "1d"});
                    res.cookie("usertoken", userToken, {
                        httpOnly: true
                    }).json({message: "Success!", user: user});
                }
                else {
                    res.status(400).json({message: "Invalid login attempt."});
                }
            }
            else {
                res.status(400).json({message: "Invalid login attempt."});
            }
        }
        catch(err) {
            console.log(err);
            return res.status(400).json(err);
        }
    },

    // BL: Logout function to clear the usertoken cookie.
    logout: (req,res) => {
        res.clearCookie('usertoken');
        res.json({message: "successful logout"})
    }
    
}