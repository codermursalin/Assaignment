const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'First Name is required',
        max: 100
    },
    email: {
        type: String,
        unique: true,
        required: 'Your email is required',
        trim: true
    },

    password: {
        type: String,
        required: 'Your password is required',
        max: 100
    }
}, { timestamps: true });


UserSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.generateJWT = function () {
    let payload = {
        id: this._id,
        email: this.email,
        name: this.name,
    };

    return jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "7d"
    });
};

module.exports = mongoose.model('Users', UserSchema);