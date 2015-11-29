var http = require("http")

//var URL = "http://google.com"
var URL = process.argv[2]

http.get(URL, function(response){
    response.setEncoding("utf8")
    response.on("data", function (data) {
        console.log(data)
    })
    
})

/*
var http = require('http')
    
    http.get(process.argv[2], function (response) {
      response.setEncoding('utf8')
      response.on('data', console.log)
      response.on('error', console.error)
    })
*/