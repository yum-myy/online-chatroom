import { useState,useEffect } from 'react'
import './listContainer.css'

import Search from './Search/search'
import CreateNewBtn from './CreateNewBtn/createNewBtn'
import ChatList from './ChatList/chatList'
import FriendAndGroupList from './FriendAndGroupList/friendAndGroupList'

function ListContainer(props){
  const [isAddShow, setAddShow] = useState(true)
  const [chatList,setChatList] = useState(null)
  const [groupsList, setGropsList] = useState(null)
  const [friendsList, setFriendsList] = useState(null)
  const [roomsList, setRoomsList] = useState(null)

  const { handleCreateNewShow } = props;

  function handleIsAddShow(isShow){
    setAddShow(isShow)
  }

  const setCurData = (data) =>{
    props.setData(data)
  }

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

    // 以下两个可以合成一个
    fetch('http://localhost:3103/api/groups',{
        method : "GET",
        mode: 'cors'
    })
    .then(res => res.json())
    .then(data =>{
        console.log('groupsList:',data);
        setGropsList(data)
    })
    .catch(error =>{
        console.log(new Error(error));
    });


    fetch('http://localhost:3103/api/friends',{
      method : "GET",
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data =>{
        console.log('friendsList:',data);
        setFriendsList(data)
    })
    .catch(error =>{
        console.log(new Error(error));
    })

    //创建聊天室的数据
    fetch('http://localhost:3103/api/room',{
      method : "GET",
      mode: 'cors'
    })
    .then(res => res.json())
    .then(data =>{
      console.log('roomList:',data);
      setRoomsList(data)
    })
    .catch(error =>{
      console.log(new Error(error));
    })
  },[])

  return(
    <div className="list-container">
      <div className="head">
        <Search handleIsAddShow={ handleIsAddShow }/>
        <CreateNewBtn isAddShow={ isAddShow } handleCreateNewShow={ handleCreateNewShow } />
      </div>
      <div className="list">
        { 
          props.showType === 0 ?
          <ChatList 
            setData={ setCurData } 
            setRoomShow={ props.setRoomShow }
            chatList={ chatList }/>
          :
          <FriendAndGroupList
            setData={ setCurData }
            setRoomShow={ props.setRoomShow }
            groupsList={ groupsList }
            friendsList={ friendsList }
            roomsList={ roomsList }/>
        }
      </div>
    </div>
  )
}

export default ListContainer