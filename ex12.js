var http = require('http')
var fs = require('fs')
var map = require('through2-map')


var server = http.createServer(function (req, res) {
    
    if (req.method != 'POST')
        return res.end('send me a POST\n')
    
    //var fileStream = fs.createReadStream("./ex02.js")
    //var fileStream = fs.createReadStream(process.argv[3])
    
    // fileStream.pipe(res)
    
    // console.log(fileStream)
    // console.log("11111111111111111111111111111111111111111111111111111111111111111111111111111111")
    // console.log(res)
    
    
    req.pipe(map(function (chunk) {
        //return chunk.toString().split('').reverse().join('') //反轉文字
        return chunk.toString().toUpperCase() //轉大寫
    })).pipe(res)
    

})
server.listen(process.argv[2])

/*
    var http = require('http')
    var map = require('through2-map')
    
    var server = http.createServer(function (req, res) {
      if (req.method != 'POST')
        return res.end('send me a POST\n')
    
      req.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
      })).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))

*/