import React from "react";
import "./AnimalDetail.css"

const AnimalDetail = ({ animal, zooNames }) => {

    return (
        <div className="detail">
            <div className="detail__content">

                <div className="detail__header">
                    <img className="detail__image" src={animal?.foto} alt={animal?.nazev} />
                    <div className="detail__title">
                        <h2 className="detail__name"><span>{animal?.nazev}</span></h2>
                        <div className="detail__latin"><span>{animal?.nazevLatinsky}</span></div>
                    </div>
                </div>

                <div className="detail__info">
                    <p className="detail__desc">
                        {animal?.popis}
                    </p>

                    <div className="detail__items">
                        <div className="detail__item">
                            <h3>Domovina</h3>
                            <p>{animal?.domovina}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Biotop</h3>
                            <p>{animal?.biotop}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Potrava</h3>
                            <p>{animal?.potrava}</p>
                        </div>
                        <div className="detail__item">
                            <h3>Velikost</h3>
                            <p>{animal?.velikost}</p>
                        </div>
                    </div>

                    <div className="detail__zoo">
                        <h3>Najdete v těchto ZOO</h3>
                        <p>{zooNames}</p>
                    </div>
                    {/* <div className="detail__zoo">
                        <h3>Najdete v těchto ZOO</h3>
                        <p>{animal?.zoo}</p>
                    </div> */}
                </div>

            </div>
        </div>
    )
}

export default AnimalDetail