const express = require('express')
const router = express.Router()

let chatData = require('./data/chatList')
let messageList = require('./data/messages')

router.get('/api/chatList',(req,res) => {
    // console.log(JSON.stringify(chatData.chatList))
    res.send(JSON.stringify(chatData.chatList));
})

// router.get('/api/chatList',(req,res) => {
//     res.send(JSON.stringify(chatData.chatList));
// })

router.get('/api/messages',(req,res) => {
    res.send(JSON.stringify(messageList.messages));
})


module.exports = router;