import { useEffect, useState } from 'react'
import './addFriends.css'

function AddFriends(props){
  const [data,setData] = useState(null)

  useEffect(() =>{

  })
  return(
    <div className="add-friends">
      {
        +data === 0 ? 
        <>
          <div className="info-top">
            <i className="iconfont"></i>
            <img src={} alt="" />
            <p className="stranger-name">{}</p>
          </div>
          <div className="info-bottom">
            <button>加为好友</button>
          </div>
        </>
        : 'addFriends'
      }
    </div>
  )
}

export default AddFriends