const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const PORT = process.env.NODE_DOCKER_PORT || 3000;
const HOST = "0.0.0.0";

// starting the server
server.listen(PORT, HOST, () => {
  console.log(`App listening on port ${PORT}`);
})