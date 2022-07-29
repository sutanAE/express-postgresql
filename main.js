const express = require('express')
const path = require('path')
const app = express()
const {addUsers} = require('./pg-client')


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

app.get('/form', (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    res.sendFile(path.join(__dirname, 'public/form.html'))
})

// post data
app.use(express.urlencoded({extended:false}))
app.post('/form/adduser', addUsers, (req,res)=>{
    console.log(__dirname)
    console.log('getting path')

    const data = req.body

    const {name,age} = req.body
    console.log(name,age)

    res.json({"message":"post ok", "data": data})
})


app.get('/api/:id', addUsers, (req,res)=>{
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