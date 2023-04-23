const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  //BL: bring in bcrypt to hash the user's password before saving to the database
const {isEmail} = require('validator');  //BL: bring in validator to confirm email given is actually an email


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minLength: [2, "First name must be at least 2 characters."]
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minLength: [2, "Last name must be at least 2 characters."]
    },
    email: {
        type: String,
        required: [true, "Email is required."],
        unique: [true, "Email already exists."],
        validate: [isEmail, "Please enter a valid email"]  //BL: using built in 'isEmail' function within validator to check if valid email or not
    },
    password: {
        type: String, 
        required: [true, "Password is required."],
        minLength: [8, "Password must be at least 8 characters."]
    }
}, {timestamps: true})

// BL: Utilizing mongoose virtuals - creating confirmPassword as a virtual attribute so that it is not saved in the database
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)  //getter
    .set(value => this._confirmPassword = value);  //setter

// BL: Middleware "pre hook" which will run before validations - checking to make sure password and confirmPassword match before saving user in database.
UserSchema.pre('validate', function(next) {
    if (this.password != this.confirmPassword) {
        this.invalidate('confirmPassword', 'Passwords must match.')
    }
    next(); //BL: The "next" function in Middleware - once this function is done running, we need this call so that the next Middleware or next function runs.
});

// BL: Using the Middleware "pre hook" again - hashing the password using bcrypt before the user is saved in the database.
UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)  //BL: The 10 is the number of salt rounds bcrypt will use when generating a salt.
        .then(hash => {
            this.password = hash;
            next(); //BL: Using the "next" call again to move onto the next function once the promise is fulfilled.
        })
})

module.exports = mongoose.model('User', UserSchema);
