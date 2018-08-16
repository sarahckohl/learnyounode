var http = require('http');
let earl = process.argv[2];

http.get(earl, (response)=>
{
    response.setEncoding("utf8");
    response.on("data", (data) => {
        console.log(data);
    }
)
}
)

