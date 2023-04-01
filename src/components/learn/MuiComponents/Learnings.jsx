import React from "react";
import '../../src/index.css'

function Learnings({image, name}){
    return(
        <div>
            <div className="farmer">
               <img className="farmer-img" src={image} />
               <div className="farmer-footer">
                    <h1 className="farmer-name">{name}</h1>
                    <button className="famers-connect-btn"> connect </button>
               </div>
            </div>
        </div>
    )
}

export default Learnings