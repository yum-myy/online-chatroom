
import './chatRoom.css'
import { useEffect, useState } from 'react'

import ChatHead from './ChatHead/chatHead'
import ChatMain from './ChatMain/chatMain'
import MessageInput from './MessageInput/messageInput'


function ChatRoom(props) {
  const { curData } = props;
  const [messages,setMessages] = useState(null)

  useEffect(()=>{
    fetch('http://localhost:3103/api/messages',{
      method : "GET",
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data =>{
        console.log('messages:',data);
        setMessages(data)
    })
    .catch(error =>{
        console.log(new Error(error));
    })
    // curData的变化会导致ChatNain重新渲染，记得测试一下！
  },[curData])

  return (
    <div className="chat-room-cotainer">
      {
        +curData !== 0 ? 
        <div className="chat-room">
          <ChatHead type={ curData.type } id={ curData.id } title={ curData.title }/>
          <ChatMain messages={ messages }/>
          <MessageInput />
        </div>
        :
        null
      }
    </div>
  )
}

export default ChatRoom