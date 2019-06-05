const http = require('http')
const PORT = 3000
const fs = require('fs')

const server = http.createServer((req, res) => {
    switch (req.url){
        case '/':
            fs.readFile('./index.html',(error,data) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            })
            break
        case '/hello':
            fs.readFile('./hello.html',(error,data) => {
                res.statusCode = 200
                res.setHeader('Content-Type', 'text/html')
                res.end(data)
            })
            break
    }
})

server.listen(PORT,() =>{
    console.log('Server is running...')
})