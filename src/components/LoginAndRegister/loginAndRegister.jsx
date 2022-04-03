import './loginAndRegister.css'
import { useState } from 'react'

const activeStyle = {
  borderBottom: '2px solid #108EE9',
  color:'#108EE9'
}

const getActiveStyle = (type,tabType) => {
  let style = type===tabType ? activeStyle : null;
  return style;
}

function Login(props){
  const { type,handleLoginStatus } = props;
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [uname, setUname] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = (e) =>{
    if(username==='abc'&&password==='123'){
      handleLoginStatus(1)
    }else{
      alert('用户名或密码错误')
    }

  }

  const handleRegister = (e) =>{
    setTimeout(()=>{
      alert('注册失败')
    },2000)
    console.log('handleRegister')
  }

  return(
    <div className="login">
        {
          type === 'login' ?
          <>
            <p className="uname">用户名</p>
              <input
                  className="uname-ipt"
                  value={ username }
                  onChange={ (e) => setUsername(e.target.value) }
                  placeholder="请输入用户名"
              />
              <p className="pwd">密码</p>
              <input
                  className="pwd-ipt"
                  type="password"
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                  placeholder="请输入密码"
              />
              <button
                  className="lg-rg-btn"
                  onClick={ handleLogin }
                  type="button"
              >
                登录
              </button>
          </>
          :
          <>
            <p className="uname">用户名</p>
              <input
                  className="uname-ipt"
                  value={ uname }
                  onChange={ (e) => setUname(e.target.value) }
                  placeholder="请输入用户名"
                  // onEnter={ handleLogin }
              />
              <p className="pwd">密码</p>
              <input
                  className="pwd-ipt"
                  type="password"
                  value={ pwd }
                  onChange={ (e) => setPwd(e.target.value) }
                  placeholder="请输入密码"
                  // onEnter={ handleLogin }
              />
              <button
                  className="lg-rg-btn"
                  onClick={ handleRegister }
                  type="button"
              >
                注册
              </button>
          </>
        }

  </div>
  )
}

function LoginAndRegister(props){

  const [tabType, setTabType] = useState(0)

  return(
    <div className="login-and-register">
      <div className="main-container">
        <div className="tab">
          <p style={{...getActiveStyle(0,tabType)}} onClick={()=>{setTabType(0)}}>登录</p>
          <p style={{...getActiveStyle(1,tabType)}} onClick={()=>{setTabType(1)}}>注册</p>
        </div>
        {
          tabType === 0 ?
          <Login type="login" handleLoginStatus={ props.handleLoginStatus }/>
          :<Login type="register"/>
        }
      </div>
    </div>
  )
}

export default LoginAndRegister