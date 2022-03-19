import { useState } from 'react'
import './search.css'

function Search(props){
    const [isProlong,setProlong] = useState(false)

    function handleInputClick(e){
        props.handleIsAddShow(false)
        setProlong(true)
    }
    function handleProlongClose(e){
        props.handleIsAddShow(true)
        setProlong(false)
    }


    return(
        <div className="search"
            style={{width:`${isProlong ? "100%" : ""}`,backgroundColor:`${isProlong ? "#F0F5F4" : ""}`}}>
            <i className="iconfont icon-sousuo1x"></i>
            <input onClick={ handleInputClick }
                   type="text"
                   placeholder="搜索群组/用户"
                   style={{backgroundColor:`${isProlong ? "#F0F5F4" : ""}`}} />
            <i className="iconfont icon-guanbi2" onClick={ handleProlongClose }></i>
        </div>
    )
}

export default Search