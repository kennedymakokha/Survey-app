const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    body: {
        type: String,
        required: true
    },

    ans1: {
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    },
    ans2: {
        type: Schema.Types.ObjectId,
        ref: 'Answer'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

},
    { timestamps: true }
);

const question = mongoose.model('Question', QuestionSchema);

module.exports = question;