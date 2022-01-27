const express = require('express');
const morgan = require('morgan');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')
const cors = require('cors');
require('dotenv/config');

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));

//importowanie routów
const itemsRoute = require('./routes/item');
const usersRoute = require('./routes/user');
const workerRoute = require('./routes/worker');
const orderRoute = require('./routes/order');

app.use('/items', itemsRoute);
app.use('/users', usersRoute);
app.use('/workers', workerRoute);
app.use('/orders', orderRoute);

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true}, () =>
    console.log('connected to DB!')
);


//nasłuchiwanie
app.listen(3000);