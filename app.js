const express = require('express')

const app= express()

app.listen('500',()=>{
    console.log('App is listening on port 500')
})

app.get('/', (req,res)=>{
    res.send('welcome to Vits Garden')
})