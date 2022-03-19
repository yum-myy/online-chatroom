import { useState } from 'react'
import './listContainer.css'

import Search from './Search/search'
import CreateNewBtn from './CreateNewBtn/createNewBtn'
import ChatList from './ChatList/chatList'

function ListContainer(){
    const [isAddShow,setAddShow] = useState(true)

    function handleIsAddShow(isShow){
        setAddShow(isShow)
    }
    return(
        <div className="list-container">
            <div className="head">
                <Search handleIsAddShow={ handleIsAddShow }/>
                <CreateNewBtn isAddShow={ isAddShow } />
            </div>
            <div className="list">
                <ChatList />
            </div>
        </div>
    )
}

export default ListContainer