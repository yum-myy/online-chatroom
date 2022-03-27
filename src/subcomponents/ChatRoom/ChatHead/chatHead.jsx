import './chatHead.css'

// 在线人数要改的
function ChatHead(props){
  const { type, title } = props;
  
  return(
    <div className="chat-head">
      <p className="title">{ title }<span style={{display:`${type!=='group' ? 'none' : ''}`}}>(10)</span></p>
      <p className="icon">
        <i className="iconfont icon-yingyong"></i>
        <i className="iconfont icon-fenxiang" style={{display:`${type!=='group' ? 'none' : ''}`,marginLeft:'16px'}}></i>
      </p>
    </div>
  )
}

export default ChatHead