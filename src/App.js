import { useState } from 'react'
import ChatRoom from './subcomponents/ChatRoom/chatRoom'
import ListContainer from './subcomponents/ListContainer/listContainer'
import SideNavBar from './subcomponents/SideNavBar/sideNavBar'

function App(props) {
  const [curData, setCurData] = useState(null)

  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <SideNavBar />
          <ListContainer setData={ setCurData }/>
          <ChatRoom curData={ curData }/>
        </div>
      </div>
    </div>
  );
}

export default App;
