const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    createdAt: {
        type: Date,
        default: Date.now,
    },
    name: {
        type: String,
        required: [true, "name is required!"],
        validate: {
            validator: function (value) {
                return /^[a-zA-Z\s]+$/.test(value);
            },
            message: (name) => `${name.value} is not a valid name!`
        },
    },
    email: {
        type: String,
        unique: true,
        required: [true, "email is required"],
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: "invalid email format!"
        },
    },
    password: {
        type: String,
        required: false,
        select: false,
        minLength: [6, "Password too short!"],
    },
    username: {
        type: String,
        unique: true,
        required: false,
        validator: function (value) {
            return /^[a-zA-Z0-9]+$/.test(value);
        },
        message: 'Username must contain only alphabets and numbers',
    },
    profileImage: {
        type: String,
        required: false,
    },
    socialLinks: {
        youtube: String,
        twitter: String,
    },
    googleId: {
        type: String,
    },
    



})



export default mongoose.models.User || mongoose.model("User", UserSchema);