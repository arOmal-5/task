require('dotenv').config()
const express = require('express')
require('./DB/connection')
const routes=require('./Routes/router')
const cors = require('cors')

const serverApp= express()
serverApp.use(express.json())
serverApp.use(cors())
serverApp.use(routes)


const   PORT=4000 || process.env.PORT

serverApp.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})

serverApp.get('/',(req,res)=>{
    res.send('server started...');
})