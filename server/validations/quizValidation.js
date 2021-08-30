const Validator = require('validator');
const isEmpty = require('./isEmpty');


module.exports.validateQuestionInput = (data) => {
    let errors = {};

    data.body = !isEmpty(data.body) && data.body !== undefined ? data.body : '';
    data.ans1 = !isEmpty(data.ans1) && data.ans1 !== undefined ? data.ans1 : '';
    data.ans2 = !isEmpty(data.ans2) && data.ans2 !== undefined ? data.ans2 : '';

    if (Validator.isEmpty(data.body)) {
        errors.body = 'Question  field is required';
    }
    if (Validator.isEmpty(data.ans1)) {
        errors.ans1 = 'First answer field is required';
    }
    if (Validator.isEmpty(data.ans2)) {
        errors.ans2 = 'Second answer field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

