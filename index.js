const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test123:test123@cluster0.8ethl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>
    console.log('Mongodb connected')
).catch(err=>console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})