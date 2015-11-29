var fs = require('fs');

//var buf = fs.readFileSync('/home/cary205/nodejs/learnyounode/ex02.js');
var buf = fs.readFileSync(process.argv[2]);

//console.log(buf.toString());

var line = buf.toString().split('\n');

var lineCnt = 0;
for(var i = 1/*最後一行也有\n*/ ; i < line.length ; i++){
    lineCnt += 1;
}

console.log(lineCnt);