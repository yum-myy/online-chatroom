import { useState } from 'react'
import './listContainer.css'

import Search from './Search/search'
import CreateNewBtn from './CreateNewBtn/createNewBtn'
import ChatList from './ChatList/chatList'

function ListContainer(props){
  const [isAddShow,setAddShow] = useState(true)

  function handleIsAddShow(isShow){
    setAddShow(isShow)
  }

  const setCurData = (data) =>{
    props.setData(data)
  }

  return(
    <div className="list-container">
      <div className="head">
        <Search handleIsAddShow={ handleIsAddShow }/>
        <CreateNewBtn isAddShow={ isAddShow } />
      </div>
      <div className="list">
        <ChatList setData={ setCurData }/>
      </div>
    </div>
  )
}

export default ListContainer