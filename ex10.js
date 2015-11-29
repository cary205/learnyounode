// var date = new Date(); //new Date("May 05, 2014 02:06:00")
// console.log(date)

function addZero(num){
    if(num >= 0 && num <= 9){
        return "0" + num
    } else {
        return num
    }
}

// console.log(addZero(date.getFullYear()) + "-" + 
//     addZero(date.getMonth() + 1) + "-" + 
//     addZero(date.getDate()) + " " + 
//     addZero(date.getHours()) + ":" + 
//     addZero(date.getMinutes())
// )

//console.log("111111111111111111111111111111111111111111111111111")
var net = require('net')
var server = net.createServer(function (socket) {
  //console.log(">>> server started")
  //console.log(socket)
  
  //socket.write(data)
  //socket.end(data)
  var date = new Date();
  //socket.end(date)
//   console.log(addZero(date.getFullYear()) + "-" + 
//     addZero(date.getMonth() + 1) + "-" + 
//     addZero(date.getDate()) + " " + 
//     addZero(date.getHours()) + ":" + 
//     addZero(date.getMinutes())
//     )
    var dateString = addZero(date.getFullYear()) + "-" + 
    addZero(date.getMonth() + 1) + "-" + 
    addZero(date.getDate()) + " " + 
    addZero(date.getHours()) + ":" + 
    addZero(date.getMinutes()) + "\n"
    
    ////dateString = "<html><head><title>123</title></head><body>123</body></html>"
    socket.end(dateString)
})
server.listen(process.argv[2])
//console.log("222222222222222222222222222222222222222222222222222")


/*
var net = require('net')
    
    function zeroFill(i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-'
        + zeroFill(d.getMonth() + 1) + '-'
        + zeroFill(d.getDate()) + ' '
        + zeroFill(d.getHours()) + ':'
        + zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))
*/