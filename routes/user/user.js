const express = require('express')
const UserController = requir("../../controllers/user/UserController")
const router = express.Router();
router.post('/create/user',(req,res)=>{
    UserController.addUser(req,res)
})
router.post('/user/login', (req,res)=>{
    UserController.doUserLogin(req,res)
})
module.exports = router