const Validator = require('validator');
const isEmpty = require('./isEmpty');
const { emailIsValid, } = require('./isEmail');
module.exports.validateRegisterInput = (data) => {
    let errors = {};

    data.email = !isEmpty(data.email) && data.email !== undefined ? data.email : '';
    data.phone = !isEmpty(data.phone) && data.phone !== undefined ? data.phone : '';
    data.password_confirm = !isEmpty(data.password_confirm) && data.password_confirm !== undefined ? data.password_confirm : '';
    data.password = !isEmpty(data.password) && data.password !== undefined ? data.password : '';



    if (!emailIsValid(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }
    if (Validator.isEmpty(data.phone)) {
        errors.phone = 'phone number is required';
    }
    if (!Validator.isLength(data.password, { min: 8, })) {
        errors.password = 'Password must be at least 8 characters';
    }
    if (!Validator.isLength(data.password_confirm, { min: 8, })) {
        errors.password_confirm = 'Password missmatch';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }
    if (Validator.isEmpty(data.password_confirm)) {
        errors.password_confirm = 'Password missmatch';
    }

    // if (!isSame(data.password, data.password_confirm)) {
    //     errors.password = 'Password is does not match the confirm password'
    // }




    return {
        errors,
        isValid: isEmpty(errors)
    }
}

