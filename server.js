const e = require('express');
const express = require('express')
const app = express()
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))


// app.use((req, res, next) => {
//     console.log('Time:', Date.now())
//     next()
//   })

  const myLogger = function (req, res, next) {
    const {password} = req.query;
    if(password === "123"){
        next()
    }else{
        res.sendStatus(401)
    }
  }

  const myLogger2 = function (req, res, next) {
        next()
        console.log("2nd middleware")
        // res.sendStatus(200)
  }

app.get('/',myLogger, (req, res) => {
    // console.log(req.get("User-Agent"));
    res.status(200).json({ message: 'get'})
})

// app.get('/:id', (req, res) => {
//     res.status(200).json({ message: 'get single '})
// })

app.post('/', (req, res) => {
    console.log(req.body)
    console.dir(req.hostname)
    res.status(201).json({ message: 'post'})
})

app.patch('/:id', (req, res) => {
    res.status(200).json({ message: 'patch update  '})
})
app.put('/:id', (req, res) => {
    res.status(200).json({ message: 'put update '})
})
app.delete('/:id', (req, res) => {
    res.status(200).json({ message: 'delete '})
})

app.listen(3000,()=>{
    console.log(`server listening on port http://localhost:${3000}`)
})