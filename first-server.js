// Import HTTP module
const http - require("http");
// Define the port to listen on
// YOU CANNOT LISTEN ON PORT 80 <---- WHY
const PORT = 8080;

function responseHandler(reques, response) {
  // Say hi
  response.end("HOLA!");
}
const server = http.createServer(responseHandler);
// tell the server to LISTEN
server.listen(PORT, function() {
  console.log("I'm listening");
  console.error("visist http:..localhost:${PORT}");
});