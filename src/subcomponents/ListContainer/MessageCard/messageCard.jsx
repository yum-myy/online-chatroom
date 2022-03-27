import './messageCard.css'

//待添加 消息预览显示字数限制
function MessageCard(props){
  const {item, selectedId, setselectedId}  = props;

  return (
    <>
      <li className={`message-card ${selectedId===item.id ? 'selectedBgc' : 'abc'}`} onClick={() =>{ setselectedId(item.id) }} >
        <img src={item.img} alt="" />
        <div className="message-right">
          <div className="message-preview">
            <p className="title">{item.title}</p>
            {
              item.msg === '' ?
              <p className="empty"></p>
              :<p className="text">{item.msg}</p>
            }
          </div>
          <p className="message-time">{item.time}</p>
        </div>
      </li>
    </>
  )
}
export default MessageCard