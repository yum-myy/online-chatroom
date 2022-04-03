import { useState } from 'react'
import LoginAndRegister from './components/LoginAndRegister/loginAndRegister'
import ChatRoom from './subcomponents/ChatRoom/chatRoom'
import ListContainer from './subcomponents/ListContainer/listContainer'
import SideNavBar from './subcomponents/SideNavBar/sideNavBar'
import UserInfo from './components/UserInfo/userInfo'
import Settings from './components/Settings/settings'
import CreateNewGroup from './components/CreateNewGroup/createNewGroup'

function App(props) {
  const [curData, setCurData] = useState(null)
  const [loginStatus, setLoginStatus] = useState(1)
  const [showType, setShowType] = useState(0)
  const [isRoomShow, setIsRoomShow] = useState(0)

  const [isUserInfoShow, setIsUserInfoShow] = useState(0)
  const [isSettingShow, setIsSettingShow] = useState(0)
  const [isCreateNewShow, setIsCreateNewShow ] = useState(0)

  // 此处请求用户信息传下去
  
  return (
    <div className="App">
      {
        loginStatus===1 ? 
        <div className="background">
          <div className="container">
            <SideNavBar 
              handleLoginStatus={ () => setLoginStatus(0) }
              changeShowType={ (type) => setShowType(type) }
              setRoomShow={ (code) => setIsRoomShow(code) }
              handleUserInfoShow={ () => setIsUserInfoShow(1) }
              handleSettingShow={ () => setIsSettingShow(1) }/>
            <ListContainer 
              setData={ setCurData }
              showType={ showType }
              setRoomShow={ (code) => setIsRoomShow(code) }
              handleCreateNewShow={ () => setIsCreateNewShow(1)}/>
            <ChatRoom 
              curData={ curData }
              isRoomShow={ isRoomShow }/>
          </div> 
        </div>
        : <LoginAndRegister handleLoginStatus={ () => setLoginStatus(1) } />
      }
      {
      isUserInfoShow===1 ? <UserInfo handleUserInfoShow={ () => setIsUserInfoShow(0) }/> : null
      }
      {
        isSettingShow===1 ? <Settings handleSettingShow={ () => setIsSettingShow(0) }/> : null
      }
      {
        isCreateNewShow===1 ? <CreateNewGroup handleCreateNewShow={ () => setIsCreateNewShow(0)}/> : null
      }
    </div>
  );
}

export default App;
