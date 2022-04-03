import { useRef, useState } from 'react'
import './messageInput.css'

const SendList = (props) =>{
  const [picPath, setPicPath] = useState('')
  const [filePath, setFilePath] = useState('')
  const picRef = useRef(null)
  const fileRef = useRef(null)

  const handlePic = () =>{
    picRef.current.click()
  }

  const handleFile = () =>{
    fileRef.current.click()
  }

  return (
    <div className="send-list">
      <p onClick={ handlePic }>发送图片</p>
      <p onClick={ handleFile }>发送文件</p>
      <input 
        type="file"
        name="pic" 
        className="v-hide" 
        id="input-pic" 
        ref={ picRef }
        onChange={ (e) => setPicPath(e.target.value) }/>
      <input 
        type="file" 
        name="file" 
        className="v-hide" 
        id='input-file'
        ref={ fileRef }
        onChange={ (e) => setPicPath(e.target.value) }/>
    </div>
  )
}


function MessageInput(props){
  const [isSendShow, setIsSendShow] = useState(0)

  const handleClick = () =>{
    let val = isSendShow===0 ? 1 : 0;
    setIsSendShow(val)
  }

  return(
    <div className="message-input">
      <div className="icons">
        <i className="iconfont icon-400biaoqing_biaoqing"></i>
        <i className="iconfont icon-fenlei1" onClick={ handleClick }></i>
        { 
          isSendShow === 1 ? <SendList /> : null
        }
      </div>
      <input type="text" id="input" placeholder='随便聊点啥吧'/>
      <i className="iconfont icon-fasong"></i>
    </div>
  )
}

export default MessageInput