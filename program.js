const socket = process.argv[2];
const filePath = process.argv[3];

const fs = require('fs');
const http = require('http');

const server = http.createServer(
   (req, res) => {
    fs.createReadStream(filePath).pipe(res)
   }
);
server.listen(socket);