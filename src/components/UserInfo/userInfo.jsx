import { useState } from 'react'
import './userInfo.css'

function UserInfo(props){
  const { handleUserInfoShow } = props;
  const [uname,setName] = useState('')
  const [old_pwd,setOldPwd] = useState('')
  const [new_pwd,setNewPwd] = useState('')

  //修改密码请求携带用户信息
  const handleUnameChange = () =>{
    console.log('handleUnameChange')
  }

  const handlePwdChange = () =>{
    console.log('handlePwdChange')
  }

  return(
    <div className="user-info">
      <div className="user-info-container">
        <div className="user-info-title">
          <p>个人信息设置</p>
          <i className="iconfont icon-guanbi2" onClick={ handleUserInfoShow }></i>
        </div>
        <div className="user-detail">
          {/* <p>修改头像</p>
          <img src="" alt="头像" />
          <input type="file" /> */}
          {/* 样式CSS放开后对P有影响 */}
          <p>修改用户名</p>
          <input type="text" placeholder="用户名" value={ uname } onChange={ (e) => setName(e.target.value) }/> 
          <br />
          <button onClick={ handleUnameChange }>确认修改</button>
          <p>修改密码</p>
          <input type="password" placeholder="旧密码" value={ old_pwd } onChange={ (e) => setOldPwd(e.target.value) }/>
          <input type="password" placeholder="新密码" value={ new_pwd } onChange={ (e) => setNewPwd(e.target.value) }/>
          <br />
          <button onClick={ handlePwdChange }>确认修改</button>
        </div>
      </div>
    </div>
  )
}

export default UserInfo