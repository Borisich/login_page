var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io').listen(server);


app.set('port', (process.env.PORT || 80));



server.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});




io.on('connection', function (socket) {
    console.log('connection!');

    socket.on('login-data', function (data) {
      var sendResponse = function(){
        if ((data.login == 'login')&&(data.password == '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8')) {
          socket.emit('result','OK')
        }
        else {
          socket.emit('result','WRONG');
        }
      }

      setTimeout(sendResponse, 1000);

    });
});
