
import { useState, useEffect } from 'react'
import './friendAndGroupList.css'

const isCurObj = (data,curIdObj) =>{
  // 判断data类型以及curIdObj的类型
  let isCur;
  if(data.group_id && curIdObj.type === 'group'){
    isCur = curIdObj.id === data.group_id ? true : false;
  }else if(data.u_id && curIdObj.type === 'friend'){
    isCur = curIdObj.id === data.u_id ? true : false;
  }
  return isCur;
}

const findItem = (dataList,curIdObj) =>{
  let item;
  if(curIdObj.type==='friend'){ 
    // dataList[0]全是friend类型
    item = dataList[0].filter((i) => {
      return i.id === curIdObj.id
    })
  }else{
    item = dataList[1].filter((j) => {
      return j.id === curIdObj.id
    })
  }

  return item
}

function Item(props){
  const { data, curIdObj, handleCurIdObj } = props;

  const changeObj = async () =>{
    let obj = {};
    // 如果是Group
    if(data.group_id){
      obj.type = 'group';
      obj.id = data.group_id;
    }else{
      obj.type = 'friend';
      obj.id = data.u_id;
    }
    handleCurIdObj(obj)
    //显示聊天室，数据如何获取,使用reducer吗？
  }

  return(
    <div className="collapse-item"
       style={{backgroundColor:`${isCurObj(data,curIdObj) ? 'rgba(5,159,149, 0.4)' : ''}`}}
       onClick={ changeObj }>
      <img src={data.avatar || data.g_avatar} alt="图片" />
      <p>{ data.nickname || data.groupName }</p>
    </div>
  )
}


function CollapsibleList(props){
  const { title, dataList, curIdObj, handleCurIdObj } = props;
  const [status, setStatus] = useState(0)

  const handleStatus = () => {
    let code = status===0 ? 1 : 0;
    setStatus(code)
  }

  return(
    <div className="collapsible-list">
      <div className="list-tab" onClick={ handleStatus }>
        {
          status===0 ?
          <i className="iconfont icon-haofangtuo400iconfontshaixuanzhedieguanbi font22Px"></i>
          :
          <i className="iconfont icon-haofangtuo400iconfontshaixuanzhedie font22Px"></i>
        }
        <span>{title}</span>
      </div>
      <div className="item-list" style={{display:`${status===0 ? 'none' : ''}`}}>
        {
          dataList?.map((data) =>{
            return(
              <Item 
              key={data.group_id || data.u_id}
              data={data}
              curIdObj={ curIdObj } 
              handleCurIdObj={ handleCurIdObj }/>
            )
          })
        }
      </div>
    </div>
  )
}

function FriendAndGroupList(props){
  const { setData, setRoomShow, groupsList, friendsList, roomsList } = props;
  const [curIdObj, setCurIdObj] = useState({id:-1,type:'friend'})


  useEffect(()=>{

    // 此时点击进入此页面出现undefined的打印,已解决
    if(curIdObj.id !== -1){
      let itemList = findItem(roomsList,curIdObj);
      setData(itemList[0])
      setRoomShow(1)
    }

  },[curIdObj,roomsList,setData,setRoomShow])

  return(
    <div className="user-group-list">
      <CollapsibleList 
        title="我的群聊" 
        dataList={ groupsList } 
        curIdObj={ curIdObj } 
        handleCurIdObj={ (obj) => setCurIdObj(obj) }
        setData={ setData }
        setRoomShow={ setRoomShow }/>
      <CollapsibleList 
        title="我的好友" 
        dataList={ friendsList }
        curIdObj={ curIdObj } 
        handleCurIdObj={ (obj) => setCurIdObj(obj) }
        setData={ setData }
        setRoomShow={ setRoomShow }/>
    </div>
  )
}

export default FriendAndGroupList