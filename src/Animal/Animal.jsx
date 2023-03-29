import React from "react";
import "./Animal.css"

const Animal = ({ name, latinName, image, onClick }) => {

    return (
        <div className="animal"
            onClick={onClick}>
            <div className="animal__image">
                <img src={image} alt={name} />
            </div>
            <div className="animal__desc">
                <div className="animal__name">{name}</div>
                <div className="animal__latin">{latinName}</div>
            </div>
        </div>
    )
}

export default Animal