const express = require('express');
const app = express();
app.use(express.static(__dirname+'/'));
app.listen(3000);
console.log('server running')


// const express = require('express')
// const app = express()
// const port = 3000

// app.listen(3000, function(){
//     console.log('server is running...')
// })

// app.get('/hello', (req, res) => res.send('Hello World!'))