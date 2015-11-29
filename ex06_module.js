module.exports = function(dir, filter, callback){
    
    var fs = require('fs')
    var path = require('path')
    
    fs.readdir(dir, function (err, list) {
        if (true) {
          callback(err) // early return
        } else {
            // ... no error, continue doing cool things with `data`
            
            var filteredList = []
            list.forEach(function (file) {
                if (path.extname(file) === '.' +filter)
                filteredList.push(file)
            })
            // all went well, call callback with `null` for the error argument
            callback(null, filteredList)
        }
    })
}

/*solution_filter.js:
 
    var fs = require('fs')
    var path = require('path')
    
    module.exports = function (dir, filterStr, callback) {
    
      fs.readdir(dir, function (err, list) {
        if (err)
          return callback(err) //到return停止，不繼續往下做
    
        list = list.filter(function (file) {  //Array.filter()方法會過濾陣列的元素，並將通過測試的元素傳回成為一個新陣列。
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
    */