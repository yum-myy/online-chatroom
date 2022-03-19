import ChatRoom from './subcomponents/ChatRoom/chatRoom'
import ListContainer from './subcomponents/ListContainer/listContainer'
import SideNavBar from './subcomponents/SideNavBar/sideNavBar'

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="container">
          <SideNavBar />
          <ListContainer />
          <ChatRoom />
        </div>
      </div>
    </div>
  );
}

export default App;
