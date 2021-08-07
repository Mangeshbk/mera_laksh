// const V4 = require('uuid');
const webSocketServerPort = 8000;

const webSocketServer = require('webSocket').server;//got webSocketServer

const http = require('http');

const server = http.createServer(); //got http server

server.listen(webSocketServerPort); //http server listening to 8000;

console.log('listening to port 8000');

//spinning both the servers

const wsServer = new webSocketServer({
    httpServer: server
})

const clients = {}; //list of all the clients

wsServer.on('request',function(request){
    var userID = Math.random()*1000;
    const connection = request.accept(null,request.origin);
    clients[userID] = connection;
    connection.on('message',function(message){
        if(message.type=="utf8"){
            console.log('Recieved Message:',message.utf8data);

            //broadcasting message to all connected clients

            for(key in clients){
                clients[key].sendUTF(message.utf8Data); //sending message to all the clients
                console.log('send Message to:',clients[key]);
            }
        }
    })
})