const mongoose = require('mongoose')
const connection_string= process.env.CONNECTION_STRING;
mongoose.connect(connection_string).then((res)=>{
    console.log('database connection established');
})
.catch((err)=>{console.log('Error connecting to mongodb'+err.message);})