/**
 * Created by ThangTheMan on 7/29/15.
 */
//load the express package and create the app
var express = require('express');
var app = express();
var path = require('path');

//send our index.html file to the user for the homepage
app.get('/', function(req,res){
    res.sendFile( path.resolve(__dirname +"/../client/index.html"));

});


//start the server
app.listen(1337);
console.log('Magic port is 1337');