//SETTING UP A SIMPLE NODE SERVER

//load http module
const http = require("http");

const hostName = "127.0.0.1";
const port = 8000;

//create http server
const server = http.createServer(function(req, res){

    //set the response http header with http status and content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    //send response body
    res.end('Hello World\nThis is a test')
});

//print a log once the server starts listening
server.listen(port, hostName, function(){
    console.log(`Server running at http://${hostName}:${port}`);
});