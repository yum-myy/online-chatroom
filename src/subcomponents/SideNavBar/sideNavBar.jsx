import { useState } from 'react'

import './sideNavBar.css'
import xiaohei from '../../static/images/xiaohei.jpg'


function SideNavBar(){

    const [list_tip,setListTip] = useState(0)
    const [about_tip,setAboutTip] = useState(0)
    const [set_tip,setSetsTip] = useState(0)
    const [logout_tip,setLogoutTip] = useState(0)
    const tips = ['friends','about','setting','logout'];
    
    function handleTipsShow(e){
        if( e.currentTarget.id === tips[0] ) {
            list_tip === 0 ? setListTip(1) : setListTip(0);
        } else if( e.currentTarget.id === tips[1] ) {
            about_tip === 0 ? setAboutTip(1) : setAboutTip(0);
        } else if( e.currentTarget.id === tips[2] ) {
            set_tip === 0 ? setSetsTip(1) : setSetsTip(0);
        } else {
            logout_tip === 0 ? setLogoutTip(1) : setLogoutTip(0);
        }

    }

    return(
        <div className="side-nav-bar">
            <div className="avatar">
                <img src={ xiaohei } alt="" />
                <div className="dot"></div>
            </div>
            <ul className="btns">
                <li id="friends"
                    onMouseOver={ handleTipsShow }
                    onMouseOut={ handleTipsShow }>
                    <i className="iconfont icon-31haoyou"></i>
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
                    onMouseOut={ handleTipsShow }>
                    <i className="iconfont icon-shezhi"></i>
                    <p style={{display:`${ set_tip ? "" : "none"}`}}>
                        设置
                    </p>
                </li>               
                <li id="logout"
                    onMouseOver={handleTipsShow}
                    onMouseOut={handleTipsShow}>
                    <i className="iconfont icon-zhuxiao"></i>
                    <p style={{display:`${ logout_tip ? "" : "none"}`}}>
                        退出登录
                    </p>
                </li>             
            </ul>
        </div>
    )
}

export default SideNavBar