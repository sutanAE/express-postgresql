const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./public'))

// importing pg-client
// const {message, getUsers} = require('./pg-method.js')



// root
app.get('/', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/api', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/api/:id', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.json({
        'id': req.params['id']
    })
})


// app.get('/postgres', getUsers, (req,res)=>{
//     console.log(__dirname)
//     console.log('getting path')

//     res.sendFile(path.join(__dirname, 'home.html'))
// })

app.listen(5000, ()=>{console.log('listening at 5000')})