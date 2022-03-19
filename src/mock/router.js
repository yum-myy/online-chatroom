const express = require('express')
const router = express.Router()

let chatData = require('./data/chatList')

router.get('/api/chatList',(req,res) => {
    // console.log(JSON.stringify(chatData.chatList))
    res.send(JSON.stringify(chatData.chatList));
})

// router.get('/api/chatList',(req,res) => {
//     res.send(JSON.stringify(chatData.chatList));
// })

module.exports = router;