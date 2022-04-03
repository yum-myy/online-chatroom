import { useState } from 'react'

import './sideNavBar.css'
import xiaohei from '../../static/images/xiaohei.jpg'


function SideNavBar(props){
  const { 
      handleLoginStatus,
      changeShowType,
      setRoomShow, 
      handleUserInfoShow, 
      handleSettingShow 
    } = props;

  const [msg_tip,setMsgTip] = useState(0)
  const [list_tip,setListTip] = useState(0)
  const [about_tip,setAboutTip] = useState(0)
  const [set_tip,setSetsTip] = useState(0)
  const [logout_tip,setLogoutTip] = useState(0)
  const tips = ['msg-list','friends','about','setting','logout'];
  
  function handleTipsShow(e){
      if (e.currentTarget.id === tips[0]) {
        msg_tip === 0 ? setMsgTip(1) : setMsgTip(0);
      } else if( e.currentTarget.id === tips[1] ) {
          list_tip === 0 ? setListTip(1) : setListTip(0);
      } else if( e.currentTarget.id === tips[2] ) {
          about_tip === 0 ? setAboutTip(1) : setAboutTip(0);
      } else if( e.currentTarget.id === tips[3] ) {
          set_tip === 0 ? setSetsTip(1) : setSetsTip(0);
      } else {
          logout_tip === 0 ? setLogoutTip(1) : setLogoutTip(0);
      }

  }

  return(
    <div className="side-nav-bar">
      <div className="avatar" onClick={ handleUserInfoShow }>
        <img src={ xiaohei } alt="" />
        <div className="dot"></div>
      </div>
      <ul className="btns">
        <li id="msg-list"
            onMouseOver={ handleTipsShow }
            onMouseOut={ handleTipsShow }>
            <i className="iconfont icon-xiaoxizhongxin" onClick={ () => changeShowType(0) }></i>
            <p style={{display:`${ msg_tip ? "" : "none"}`}}>
                消息列表
            </p>
        </li>   
        <li id="friends"
            onMouseOver={ handleTipsShow }
            onMouseOut={ handleTipsShow }>
            <i className="iconfont icon-31haoyou" onClick={ () => { setRoomShow(0);changeShowType(1) }}></i>
            <p style={{display:`${ list_tip ? "" : "none"}`}}>
                好友列表
            </p>
        </li>                             
        <li id="about"
            onMouseOver={ handleTipsShow }
            onMouseOut={ handleTipsShow }>
            <i className="iconfont icon-guanyu"></i>
            <p style={{display:`${ about_tip ? "" : "none"}`}}>
                关于
            </p>
        </li>             
        <li id="setting"
            onMouseOver={ handleTipsShow }
            onMouseOut={ handleTipsShow }
            onClick={ handleSettingShow }>
            <i className="iconfont icon-shezhi"></i>
            <p style={{display:`${ set_tip ? "" : "none"}`}}>
              设置
            </p>
        </li>               
        <li id="logout"
            onMouseOver={handleTipsShow}
            onMouseOut={handleTipsShow}>
            <i className="iconfont icon-zhuxiao" onClick={ handleLoginStatus }></i>
            <p style={{display:`${ logout_tip ? "" : "none"}`}}>
              退出登录
            </p>
        </li>             
      </ul>
    </div>
  )
}

export default SideNavBar