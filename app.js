const express = require('express'),
	routes = require('./routes/index');

const app = express();

app.use('/', routes);
module.exports = app;