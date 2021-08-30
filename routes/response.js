const express = require('express');
const Response = require('./../models/response');

var isAuth = require('./../utilities/auth');

const responseRoute = express.Router();


const editresponse = async (d, ans) => {
    if (d === ans) {
        return true
    }

}

responseRoute.post('/response', isAuth, async (req, res) => {
    try {
        const data = req.body
        data.user = req.user._id
        console.log(req.user._id)
        const Exists = await Response.findOne({ user: req.user._id, question: req.body.question })

        if (Exists === null) {
            const resp = new Response(data);
            const createdResponse = await resp.save();
            if (data.ans === 'ans2') {
                const edited = await Response.findOneAndUpdate({ user: req.user._id, question: req.body.question }, {
                    ans2: true
                }, { new: true, useFindAndModify: false })

                return res.status(200).send(edited);
            }
            if (data.ans === 'ans1') {
                const edited = await Response.findOneAndUpdate({ user: req.user._id, question: req.body.question }, {
                    ans1: true
                }, { new: true, useFindAndModify: false })

                return res.status(200).send(edited);
            }
        }

        if (Exists) {
            if (data.ans === 'ans2') {
                const edited = await Response.findOneAndUpdate({ user: req.user._id, question: req.body.question }, {
                    ans2: true,
                    ans1: false
                }, { new: true, useFindAndModify: false })

                return res.status(200).send(edited);
            }
            if (data.ans === 'ans1') {
                const edited = await Response.findOneAndUpdate({ user: req.user._id, question: req.body.question }, {
                    ans1: true,
                    ans2: false,
                }, { new: true, useFindAndModify: false })

                return res.status(200).send(edited);
            }
        }


    } catch (error) {
        console.log(error)
    }
})


responseRoute.get('/responses/:id/count', async (req, res) => {

    const countans1 = await Response.countDocuments({ question: req.params.id, ans1: true })

    const countans2 = await Response.countDocuments({ question: req.params.id, ans2: true })
    console.log(countans2)
    return res.status(200).json({ success: true, count2: countans2, count1: countans1 });


})
responseRoute.get('/responses/category/:id', async (req, res) => {


    const respons = await Response.find({ category: req.params.id }).populate(['question'])

    return res.status(200).json({ success: true, respons });


})



module.exports = responseRoute
