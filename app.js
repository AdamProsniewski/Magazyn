const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//importowanie routów
const postsRoute = require('./routes/itemPOST');

app.use('/posts', postsRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>
    console.log('connected to DB!')
);


//nasłuchiwanie
app.listen(3000);