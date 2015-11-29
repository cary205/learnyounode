var fs = require('fs');

var lineCnt = 0;

function fileLineCnt(callback){
    //fs.readFile('/home/cary205/nodejs/learnyounode/ex02.js', function doneReading(err, fileContents) {
    fs.readFile(process.argv[2], function doneReading(err, fileContents) {
        var line = fileContents.toString().split('\n');
        for(var i = 1/*最後一行也有\n*/ ; i < line.length ; i++){
            lineCnt += 1;
        }
        callback();
    })
}

function pntLineCnt(){
    console.log(lineCnt);
}

fileLineCnt(pntLineCnt);

/*
    var fs = require('fs')
    var file = process.argv[2]
    
    fs.readFile(file, function (err, contents) {
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/