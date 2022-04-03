import { useState } from 'react';
import './createNewGroup.css'

function CreateNewGroup(props){
  const { handleCreateNewShow } = props;

  const [groupName, setGroupName] = useState('')

  return(
    <div className="create-new-group">
      <div className="create-new-container">
        <div className="create-new-title">
          <p>创建群组</p>
          <i className="iconfont icon-guanbi2" onClick={ handleCreateNewShow }></i>
        </div>
        <div className="create-new-info">
          <p>请输入群组名</p>
          <input 
            type="text" 
            value={ groupName } 
            onChange={ (e) => setGroupName(e.target.value) }/>
          <button>创建</button>
        </div>
      </div>
    </div>
  )
}

export default CreateNewGroup