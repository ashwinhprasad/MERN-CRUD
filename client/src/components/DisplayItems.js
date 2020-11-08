import React, { } from "react";


const DisplayItem = (props) => {


    return (
        <div className="display-wrapper">
            <h2 id="display-header">Display Items</h2>
            <div className="display-wrapper">
                {props.items.map((item) => {
                    return (
                        <div className="item-wrapper" key={item._id}>
                        <h3>{item.name}<button
                        onClick={props.onClickButton.bind(this,item.name)}
                        >Delete Item</button></h3>  
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DisplayItem;