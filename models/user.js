const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {

        email: {
            type: String,
            required: true,
            max: 50,

        },
        phone: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        admin: {
            type: Boolean,
            default: false
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
