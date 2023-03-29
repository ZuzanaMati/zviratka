import React, { useEffect } from "react";
import { useState } from "react";
import Animal from "../Animal/Animal.jsx";

const AnimalList = ({ viewDetail, animals, search }) => {

    let filtered = animals?.filter((item) => {
        return search.toLowerCase() === ""
            ? item
            : item.nazev.toLowerCase().includes(search) || item.nazevLatinsky.toLowerCase().includes(search)
    })

    return (
        <div className="animal-list">

            {filtered?.map((item) =>
                < Animal
                    key={item.id}
                    name={item.nazev}
                    latinName={item.nazevLatinsky}
                    image={item.foto}
                    onClick={() => viewDetail(item)}
                />
            )}

            {(filtered?.length === 0) && <p style={{ color: "white" }}>Hledání nenašlo žádné zvíře</p>}

            {/* {animals !== null && animals.filter((item) => {
                return search.toLowerCase() === ""
                    ? item
                    : item.nazev.toLowerCase().includes(search) || item.nazevLatinsky.toLowerCase().includes(search)
            })
                .map((item) =>
                    < Animal
                        key={item.id}
                        name={item.nazev}
                        latinName={item.nazevLatinsky}
                        image={item.foto}
                        onClick={() => viewDetail(item)}
                    />
                )} */}

        </div>
    )
}

export default AnimalList