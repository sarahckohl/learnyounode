var http = require('http');
let earl = process.argv[2];
let bl = require('bl');

http.get(earl, (response)=>
{
    response.pipe(bl( (err, data) => {
        console.log(data.toString().length);
        console.log(data.toString());

    }
    ));
            
}
)

