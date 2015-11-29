
var fs = require('fs')
//var path = '/home/cary205/nodejs/learnyounode/'
var path = process.argv[2]

//var filter = 'js'
var filter = process.argv[3]

fs.readdir(path, function (err, list) {
    //console.log(list.length)
    
    for(var i = 0 ; i < list.length ; i++){
        var fileNames = list[i].split('.')
        if(fileNames[1] == filter){
            console.log(list[i])
        }
    }
})

/*
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(process.argv[2], function (err, list) {
      list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
          console.log(file)
      })
*/