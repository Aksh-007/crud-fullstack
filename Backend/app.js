require('dotenv').config();
const express = require('express');
const connectToDB = require('./configuation/dbConnection')
//importing routes
const userRoutes = require('./router/userRoutes')
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));

connectToDB();

//middleware for route
app.use('/', userRoutes)

module.exports = app;
