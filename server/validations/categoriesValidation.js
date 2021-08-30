const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports.validateCategoryInput = (data) => {
    let errors = {};

    data.title = !isEmpty(data.title) && data.title !== undefined ? data.title : '';
    data.description = !isEmpty(data.description) && data.description !== undefined ? data.description : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Title field is required';
    }

    if (Validator.isEmpty(data.description)) {
        errors.description = 'description field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

