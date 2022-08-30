import React from "react";

export default function SortOptions(props){
    const [filtry] = React.useState([
        "dataDodania",
        "ocena"
    ]);

    return(
        <select>
            {filtry.map(filtr => <option key = {filtry.indexOf(filtr)} value = {filtr}>{filtr}</option>)}

        </select>
    )
}
