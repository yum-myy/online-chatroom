
import './createNewBtn.css'

function CreateNewBtn(props){

    return(
        <div className="create-new-btn" style={{display:`${ props.isAddShow ? "" : "none" }`}}>
            <i className="iconfont icon-tianjia"></i>
        </div>
    )
}

export default CreateNewBtn