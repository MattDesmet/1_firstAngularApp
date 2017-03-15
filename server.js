var express = require('express');
var app = express();

var path = require('path');
var bp = require('body-parser');

app.use(express.static(path.join(__dirname + '/client')));
app.use(bp.json());
app.use('/', function(req, res){
  // res.send("this is the non-default route")
})

//require('./server/config/mongoose.js');
//require('./server/config/routes.js')(app);

app.listen(8000, function(){
  console.log('listing on port 8000');
})
