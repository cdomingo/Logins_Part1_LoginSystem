//import libraries 
var path = require('path'); 
var express = require('express');  
var compression = require('compression');  
var favicon = require('serve-favicon'); 
var cookieParser = require('cookie-parser'); 

//pull in our routes
var router = require('./router.js'); 

var server;  
var port = process.env.PORT || process.env.NODE_PORT || 3000; 

var app = express(); 
app.use('/assets', express.static(path.resolve(__dirname+'../../client/'))); 
app.use(compression()); 
                                                     
app.set('view engine', 'jade'); 
app.set('views', __dirname + '/views'); 
app.use(favicon(__dirname + '/../client/img/favicon.png')); 
app.use(cookieParser()); 

router(app); 

server = app.listen(port, function(err) { 
    if (err) {
      throw err;
    }
    console.log('Listening on port ' + port);
});
