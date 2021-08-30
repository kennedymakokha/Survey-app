const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizAnswerSchema = new Schema({
    question: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    ans1: {
        type: Boolean,
        default: false
    },
    ans2: {
        type: Boolean,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },

},
    { timestamps: true }
);

const ans = mongoose.model('Response', QuizAnswerSchema);

module.exports = ans;