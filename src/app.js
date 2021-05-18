const express = require('express')
const mongoose =require('mongoose')

const mongoUri='mongodb+srv://admin:Copper83@vitssecretgarden.k8fty.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri,{
    userNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
})

mongoose.connection.on('connected',()=>{
    console.log('connected to Mongo')
})

mongoose.connection.on('error',(err)=>{
    console.log('error connecting to mongo', err)
})


const app= express()

app.listen('500',()=>{
    console.log('App is listening on port 500')
})

app.get('/', (req,res)=>{
    res.send('welcome to Vits Garden')
})