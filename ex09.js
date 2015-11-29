/********************
在callback外的會馬上執行
若要處理callback後的東西要把程式碼放進callback裡

陣列index處理注意，不要加過頭

***************/


//console.log("1111111111111111111111111111111111111111111111111")

var http = require('http');
var bl = require('bl');
// var result = [];
// var count = 0;

// for(var i=0;i<3;i++) {
//     http.get(process.argv[2 + i], function(res){
//         res.pipe(bl(function(err,data){
//             //if(err) return console.log(err.message);
            
            
            
//             result[i]  = data.toString();
//             count++;
            
//             console.log(">>>DATA[" + i + "]");
//             console.log(">>>count[" + count + "]");
            
//             // if(count == 3) {
//             //     for(var j=0;j<result.length;j++) {
//             //         console.log(">>>>>" + j + result[j]);
//             //     }
//             // }
//         }));
//     });
// }
//console.log("2222222222222222222222222222222222222222222222222222")

var result = [];
var count = 0; //用一個外在變數，避免大的index先執行完就印出

function getget(index){
    http.get(process.argv[2 + index], function(res){
        res.pipe(bl(function(err,data){
            if(err) return console.log(err.message);
            
            result[index]  = data.toString();
            count++;
            
            //console.log(">>>>>DATA[" + index + "]");
            //console.log(">>>>>count[" + count + "]");
            
            if(count == 3) {
                for(var j=0;j<result.length;j++) {
                    console.log(result[j]);
                }
            }
        }));
    });
}

for(var i=0;i<3;i++) {
    getget(i)
}

//console.log("333333333333333333333333333333333333333333333333333333333")
//這裡不管callcack，直接執行
// for(var i=0;i<3;i++) {
//     console.log("result: " + result[i])
// }
//console.log("44444444444444444444444444444444444444444444444444444444444")



/*
var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0

    function printResults () {
      for (var i = 0; i < 3; i++)
        console.log(results[i])
    }

    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err)
            return console.error(err)

          results[index] = data.toString()
          count++

          if (count == 3)
            printResults()
        }))
      })
    }

    for (var i = 0; i < 3; i++)
      httpGet(i)


*/