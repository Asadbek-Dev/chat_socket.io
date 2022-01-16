var express=require('express');
var app=express();
var server=require('http').createServer(app);
const io = require('socket.io')(server);

server.listen(3000);

app.get('/',function(request,respons){
    respons.sendFile(__dirname+'/index.html')
})