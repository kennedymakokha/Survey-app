
var express = require('express')
const UserRoute = require('./routes/auth')
const CategoryRoute = require('./routes/categories')
const QuestionRoute = require('./routes/questions')
const responseRoute = require('./routes/response')
var path = require('path');
var dotenv = require('dotenv');
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
const morgan = require('morgan');
const cors = require('cors');
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8008;

app.use(cors())
// mongoose connection 
mongoose.Promise = global.Promise;

require("dotenv").config();
var db;
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, function (err, database) {
    if (err) {
        return console.log(err)
    };
    db = database

    console.log('db connected')
});



// bodyparser setup

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

// jwt set up

app.use('/api', UserRoute)
app.use('/api', CategoryRoute)
app.use('/api', QuestionRoute)
app.use('/api', responseRoute)

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
app.listen(PORT, () =>
    console.log(`Your server is running on port ${PORT} on DB: ${process.env.MONGODB_URL}`));
module.exports = db


