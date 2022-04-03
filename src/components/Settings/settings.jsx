import './settings.css'
import { useState } from 'react';

const activeStyle = {
  borderBottomColor: '#108EE9',
  color:'#108EE9'
}

const getActiveStyle = (type,tabType) => {
  let style = type===tabType ? activeStyle : null;
  return style;
}

function Settings(props){
  const { handleSettingShow } = props;
  const [tabType, setTabType] = useState(0)


  return(
    <div className="settings">
      <div className="settings-container">
        <div className="settings-title">
          <div className="tab">
            <p style={{...getActiveStyle(0,tabType)}} onClick={()=>{setTabType(0)}}>功能</p>
            <p style={{...getActiveStyle(1,tabType)}} onClick={()=>{setTabType(1)}}>主题</p>
          </div>
          <i className="iconfont icon-guanbi2" onClick={ handleSettingShow }></i>
        </div>
        <div className="user-detail">
          {
            tabType === 0 ?
            'main'
            :'111'
          }
        </div>
      </div>
    </div>
  )
}

export default Settings