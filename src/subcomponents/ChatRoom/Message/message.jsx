import './message.css'

function Other(props){
  const { info } = props;
  return(
    <div className="other">
      <img src={info.avatar} alt="" className="image" />
      <div className="message">
          <div className="nickname">{ info.nickname }</div>
          {
            info.msgType === 'pic' ?
            <div className="pic"><img src={ info.msg } alt="" /></div>
            :
            <p><span>{ info.msg }</span></p>
          }
      </div>
  </div>
  )
}


function Self(props){
  const { info } = props;
  
  return(
    <div className="self">
      <img src={ info.avatar } alt="" className="image" />
      <div className="message">
        {
          info.msgType === 'pic' ?
          <div className="pic"><img src={ info.msg } alt="" /></div>
          :	<p><span>{ info.msg }</span></p>
        }
      </div>
  </div>
  )
}

function Message(props){
  const { info } = props;
  return(
    <div className="message">
      {
        info.type === 'self' ?
        <Self info={ info } />
        :             
        <Other info={ info }/>
      }
    </div>
  )
}

export default Message