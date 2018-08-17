const socket= process.argv[2];

const net = require('net');

function padDigits(number)
{
    return number < 10 ? "0"+number : String(number); 
}

const server = net.createServer(
    (socket)=>{
        let date = new Date();

        socket.end(
            `${date.getFullYear()}-${padDigits(date.getMonth()+1)}-${padDigits(date.getDate())} ${padDigits(date.getHours())}:${padDigits(date.getMinutes())}\n`
        );
    }
);
server.listen(socket);