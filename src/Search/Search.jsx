import React from "react";
import "./Search.css"

const Search = ({ search }) => {

    return (
        <form onChange={(e) => search(e.target.value)}>
            <input
                type="text" />
        </form>
    )
}

export default Search