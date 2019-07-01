const express = require('express')
const app = express()
const port = 3000

app.listen(3000, function(){
    console.log('server is running...')
})

app.get('/hello', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening on port ${port}!`))