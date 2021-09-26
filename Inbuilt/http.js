var http = require("http");

var server = http.createServer(function(req,res){
    res.write('<h1> coming via Nodejs</h1>');
    console.log("RUnning...")
    res.end()
})

server.listen(6400)