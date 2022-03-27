import './chatMain.css'
import Message from '../Message/message'

function ChatMain(props){
  
  return(
    <div className="chat-main">
      {
        props.messages?.map((message) => {
          return <Message key={message.id} info={ message } />
        })
      }
    </div>
  )
}

export default ChatMain