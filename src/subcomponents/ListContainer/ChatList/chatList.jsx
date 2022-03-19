
import { useEffect, useState } from 'react'
import './chatList.css'

function ChatList(){
    const [chatList,setChatList] = useState(null)

    useEffect(()=>{
        fetch('http://localhost:3103/api/chatList',{
            method : "GET",
            mode: 'cors'
        })
        .then(res => res.json())
        .then(data =>{
            console.log('chatList:',data);
            setChatList(data)
        })
        .catch(error =>{
            console.log(new Error(error));
        })
    },[])

    return(
        <div className="chat-list">
          <ul>
            {
              chatList ? chatList.map((ele) => {
                  return (
                  <li key={ele.id}>
                    <img src={ele.img} alt="" />
                    <div>
                      <p>{ele.title}</p>
                      <p>{ele.msg}</p>
                    </div>
                    <p>{ele.time}</p>
                  </li>)
              }) : null
            }
          </ul>
        </div>
    )
}

export default ChatList