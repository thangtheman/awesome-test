/**
 * Created by ThangTheMan on 7/29/15.
 */
//load the express package and create the app
var express = require('express');
var app = express();
var path = require('path');

//landing page for public

//send our index.html file to the user for the homepage
app.get('/', function(req,res){
    res.sendFile( path.resolve(__dirname +"/../client/index.html"));
});

//admin
require('./adminRoute.js','./usersRoute.js')(app,express);


//Import function from other JavaScript Files
//var fs = require('fs');
//// file is included here:
//eval(fs.readFileSync('adminRoute.js')+'');




//start the server
app.listen(1337);
console.log('Magic port is 1337');