const socket = process.argv[2];

const map = require('through2-map');
const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer(
   (req, res) => {
       res.writeHead(200, {'content-Type':'application/json'});
       switch(req.method)
       {
           case 'GET':
            {
                let earl = url.parse(req.url,true);
                const ISOTime = earl.query.iso;
                const date = new Date(ISOTime);

                switch(earl.pathname){
                    case '/api/parsetime':
                    {
                     var obj = {
                        "hour": date.getHours(),
                        "minute": date.getMinutes(),
                        "second": date.getSeconds()
                     }
                     res.end(JSON.stringify(obj));
                    break;
                    }
                    case '/api/unixtime':
                    {
                        var obj = {"unixtime": date.getTime()};
                        res.end(JSON.stringify(obj));
                        break;
                    }
                    default: res.end("Resource not found\n");
                }
                break;
            }
            default: {
                res.writeHead(404);
                res.end()
            };
            
       }
}
);
server.listen(socket);