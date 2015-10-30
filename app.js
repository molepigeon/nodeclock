/*jshint node:true*/

// app.js
var express = require('express');

// setup middleware
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public')); //setup static public directory

var port = 80;
// Start server
app.listen(port);
console.log('App started on port ' + port);
