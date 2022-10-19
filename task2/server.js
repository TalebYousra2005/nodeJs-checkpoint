const http = require("http");

const server = http.createServer((req, res) => {
    res.write('<html><body><p>Hello NODE !!!!</p></body></html>');
    res.end();
});

server.listen(3000); //3 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
