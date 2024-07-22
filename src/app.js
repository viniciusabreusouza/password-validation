const express = require('express');
const app = express();
var validateRouter = require('./routes/validate.route');

app.use(express.json());

// Routes
app.use('/validate-password', validateRouter);

module.exports = app;