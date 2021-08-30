const express = require('express');
const User = require('./../models/user');
var bcrypt = require('bcryptjs');
var generateToken = require('./../utilities/tokenGen');
var isAuth = require('./../utilities/auth');
var { validateRegisterInput } = require('./../validations/userValidation')

const userRouter = express.Router();
userRouter.post('/signin', async (req, res) => {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.send({
                _id: user._id,
                admin: user.admin,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user),
            });
            return;
        }
    }
    res.status(401).send({ message: 'Invalid email or password' });
});
userRouter.post('/register', async (req, res) => {
    try {
        const data = req.body

        const userExists = await User.findOne({ email: req.body.email })

        const { errors, isValid } = validateRegisterInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        if (userExists) {
            res.status(401).send({ message: `${req.body.email} is already used kindly use a different email` });
        }
        if (bcrypt.compareSync(req.body.password, req.body.password)) {
            res.status(401).send({ message: `Password must match the confirm password ` });
        }
        data.password = bcrypt.hashSync(req.body.password, 8)
        const user = new User(data);
        const createdUser = await user.save();
        res.status(200).send(createdUser)

    } catch (error) {
        console.log(error)
    }
})


userRouter.get('/user/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ message: 'User Not Found' });
    }
})
    ;


module.exports = userRouter
