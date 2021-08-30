const express = require('express');
const Question = require('./../models/questions');
const Answer = require('./../models/answers');

var isAuth = require('./../utilities/auth');
var { validateQuestionInput } = require('./../validations/quizValidation')

const quizRoute = express.Router();

quizRoute.post('/question', isAuth, async (req, res) => {
    try {
        const data = req.body
        const Exists = await Question.findOne({ body: req.body.body, category: req.body.category })
        const { errors, isValid } = validateQuestionInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        if (Exists) {
            res.status(401).send({ message: `${req.body.boy} is already in the system` });
        }
        const newAns = new Answer({ ans: req.body.ans1 })
        const savedAns1 = await newAns.save()
        const newAns1 = new Answer({ ans: req.body.ans2 })
        const savedAns2 = await newAns1.save()
        const questionData = {
            body: req.body.body,
            category: req.body.category,
            ans1: savedAns1._id,
            ans2: savedAns2._id,
            createdBy: req.user._id
        }

        const newQuestion = new Question(questionData)
        const savedqustion = await newQuestion.save()

        res.status(200).send(savedqustion);
    } catch (error) {
        console.log(error)
    }
})


quizRoute.get('/questions', async (req, res) => {
    const questions = await Question.find().populate(['createdBy', 'ans1', 'ans2', 'category']);
    if (questions) {
        res.status(200).send(questions);
    } else {
        res.status(404).send({ message: 'questions Not Found' });
    }
});
quizRoute.get('/category/:id/questions', async (req, res) => {
    const questions = await Question.find({ category: req.params.id }).populate(['createdBy', 'ans1', 'ans2', 'category']);
    if (questions) {
        res.status(200).send(questions);
    } else {
        res.status(404).send({ message: 'questions Not Found' });
    }
});


module.exports = quizRoute
