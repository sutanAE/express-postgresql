const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('./static'))


// root
app.get('/', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'home.html'))
})


// postgres
app.get('/', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'home.html'))
})

app.get('/postgres', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'home.html'))
})