var ex06 = require('./ex06_module.js')

ex06('.', 'js', function (err, filteredList) {
    filteredList.forEach(function (file) {
        console.log(file)
    })
})

/*solution.js:
 
    var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err)
        return console.error('There was an error:', err) //到return停止，不繼續往下做
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
    */