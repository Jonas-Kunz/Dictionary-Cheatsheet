let http = require("http");
let request = require("request");


let server = http.createServer((function(request,response) {
  response.writeHead(200, {
    "Content-Type": "text/plain"
  })
  response.end("Hello World\n");
}));

server.listen(3000);

request("http://www.google.com", function(error, response, body) {
  console.log(body);
})