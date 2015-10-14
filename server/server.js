/**
 * Created by ThangTheMan on 7/29/15.
 */
// BASE SETUP
// ======================================

// CALL THE PACKAGES --------------------
var express = require('express'); //call express
var app = express(); //define our app using express
var bodyParser = require('body-parser'); //get bodyParser
var morgan = require('morgan'); //used to see request
var mongoose = require('mongoose'); //for working with our database
var port = process.env.PORT || 3000 //set the port for our app.
var path = require('path');
//var bcrypt = require('bcrypt-node.js');
// APP CONFIGURATION ---------------------
// use body parser so we can grab information from POST requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// configure our app to handle CORS requests
app.use(function(req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, \ Authorization');
next();
});
////Import function from other JavaScript Files
//var fs = require('fs');
//// file is included here:
//eval(fs.readFileSync('usersRoutes.js')+'');

app.use(morgan('dev'));


//Routes
require('./routes.js')(app,express, path);
//require('./usersRoute.js')(app,express);






//start the server
app.listen(port);
console.log('Magic happens on port 3000');