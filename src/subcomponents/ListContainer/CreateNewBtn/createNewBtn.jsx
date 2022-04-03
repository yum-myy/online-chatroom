
import './createNewBtn.css'

function CreateNewBtn(props){
    const { handleCreateNewShow } = props;

    return(
        <div className="create-new-btn" style={{display:`${ props.isAddShow ? "" : "none" }`}} onClick={ handleCreateNewShow }>
            <i className="iconfont icon-tianjia"></i>
        </div>
    )
}

export default CreateNewBtn