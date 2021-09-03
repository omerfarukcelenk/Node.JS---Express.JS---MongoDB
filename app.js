const express = require("express");
const exphbs = require("express-handlebars");
const Handlebars = require('handlebars')
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const app = express()
const port = 3000
const hostname = '127.0.0.1';
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const generateDate = require('./helpers/generateDate').generateDate
const expressSession = require('express-session')
var MongoStore = require ('connect-mongo');


mongoose.connect('mongodb://127.0.0.1/nodeblog_db', { useNewUrlParser: true, useUnifiedTopology: true });




app.use(expressSession({
  secret: 'testotesto',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({ mongoUrl: 'mongodb://127.0.0.1/nodeblog_db' })
}))

app.use(fileUpload())

app.use(express.static('public'))



app.engine("handlebars", expressHandlebars({
  handlebars: allowInsecurePrototypeAccess(Handlebars),
  helpers: {
    generateDate
  }
}));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

const nyMiddleware = (req, res, next) => {
  next()
}

app.use('/', nyMiddleware)

const main = require('./routes/main')
const posts = require('./routes/posts');
const users = require('./routes/users');

app.use('/', main)
app.use('/posts', posts)
app.use('/users', users)



app.listen(port, hostname, () => {
  console.log(" Server Çalışıyor, http://" + hostname + ":" + port + "/");
}
)


