var http = require('http')
var url = require('url')

var server = http.createServer(function (req, res) {
    
    
    //req.pipe(res)
    // console.log(req.url)
    // res.end(req.url)
    //console.log("==============================================")
    //console.log(req.url)
    
    var urlObj = url.parse(req.url, true)
    //console.log(urlObj)
    
    var pathname = urlObj.pathname
    //console.log("pathname: " + pathname)
    
    var iso = urlObj.query.iso
    //console.log("iso: " + iso)
    
    var date = new Date(iso)
    
    var yyyy = date.getFullYear()
    var mm = (date.getMonth() + 1)
    var dd = date.getDate()
    var hh = date.getHours()
    var mi = date.getMinutes()
    var ss = date.getSeconds()
    
    var time = date.getTime()
    
     var jsonDate = {}
    
    if(pathname == "/api/parsetime") {
        //res.end("parsetime")
        
        jsonDate.hour = hh
        jsonDate.minute = mi
        jsonDate.second = ss
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonDate))
        
    } else if(pathname == "/api/unixtime") {
        //res.end("unixtime")
        
        jsonDate.unixtime = time
        
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(jsonDate))
    } else {
        res.end("ERROR")
    }
})
server.listen(process.argv[2])


/*
    var http = require('http')
    var url = require('url')
    
    function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime : time.getTime() }
    }
    
    var server = http.createServer(function (req, res) {
      var parsedUrl = url.parse(req.url, true)
      var time = new Date(parsedUrl.query.iso)
      var result
    
      if (/^\/api\/parsetime/.test(req.url))
        result = parsetime(time)
      else if (/^\/api\/unixtime/.test(req.url))
        result = unixtime(time)
    
      if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(result))
      } else {
        res.writeHead(404)
        res.end()
      }
    })
    server.listen(Number(process.argv[2]))
 
*/