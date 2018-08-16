var fs = require('fs');
var path = require('path');

module.exports = (dirName, fileext, func) => {
    fs.readdir(dirName, (err, list) => {
            if(err) return func(err);
        newList = list.filter( file => 
            
            {
                let ext = path.extname(file);
                return ext === '.'+fileext;
            }
        
        );
        func(null, newList);
    })
}
