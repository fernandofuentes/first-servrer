// Import HTTP module
const http = require("http");
// Define the port to listen on
// YOU CANNOT LISTEN ON PORT 80 <---- WHY
const PORTA = 7000;
const PORTB = 7050;

function responseHandler(require, response) {
  // Say hi
  response.end("HOLA!");
}
const server = http.createServer(responseHandler);



// tell the server to LISTEN to PORTA
server.listen(PORTA, function() {
  console.log("I'm listening to PORT-B");
  console.error("visist http:..localhost:${PORTA}");
});


// tell the server to LISTEN to PORTB
server.listen(PORTB, function() {
  console.log("I'm listening to PORT-A");
  console.error("visist http:..localhost:${PORTB}");
});