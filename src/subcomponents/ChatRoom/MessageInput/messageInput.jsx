import './messageInput.css'

function MessageInput(){
  return(
    <div className="message-input">
      <p className="icons">
        <i className="iconfont icon-400biaoqing_biaoqing"></i>
        <i className="iconfont icon-fenlei1"></i>
      </p>
      <input type="text" id="input" placeholder='随便聊点啥吧'/>
      <i className="iconfont icon-fasong"></i>
    </div>
  )
}

export default MessageInput