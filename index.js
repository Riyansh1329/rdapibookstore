const express = require('express')
const connect = require('./connection')
const cors = require('cors')
const book = require('./routes/book')
const user = require('./routes/User')
const home = require('./routes/user/home')
const mobile = require('./routes/mobile')
const discount = require('./routes/discount')
const createAdmin = require('./createAdmin')
const app = express();
app.use(express.json())
app.use(cors())
app.use(book)
app.use(mobile)
app.use(user)
app.use(home)
app.use(discount)
connect();
createAdmin();
app.listen(3000,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("server is running on port 3000")
    }
})