const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AnswerSchema = new Schema({

    ans: {
        type: String,
        required: true
    },
   
},
    { timestamps: true }
);

const ans = mongoose.model('Answer', AnswerSchema);

module.exports = ans;