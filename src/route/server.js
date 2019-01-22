const http = require('http')
const fs = require('fs')

var app = http.createServer((req,res)=>{
    fs.readFile('./index.html',(err,data)=>{
        res.write(data)
    res.end()
    })
    
})

app.listen(8899,()=>{
    console.log('server listen on 8899')
})