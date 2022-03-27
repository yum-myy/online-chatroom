
import { useEffect, useState } from 'react'
import './chatList.css'
import MessageCard from '../MessageCard/messageCard'

const chatListStyle = {
    overflow: 'hidden',
    minHeight: '450px',
    maxHeight: '450px',
    overflowY: 'scroll'
  }

function findData(chatList,selectedId) {
  const result = chatList.filter(item => item.id===selectedId);
  return result[0] || {}
}

function ChatList(props){
    const [chatList,setChatList] = useState(null)
    const [selectedId, setselectedId] = useState(-1)
    const { setData } = props;
  

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

    const changeSelectedData = (id) =>{
      setselectedId(id)
      const selectedData = findData(chatList,id)
      setData(selectedData)
    }
   
    return(
        <div className="chat-list" style={{...chatListStyle}} >
          <ul>
            {//响应式高度怎么办？
              chatList ? chatList.map((ele) => {
                  return <MessageCard item={ele} key={ele.id} selectedId={ selectedId } setselectedId={ changeSelectedData }/>
              }) : null
            }
          </ul>
        </div>
    )
}

export default ChatList