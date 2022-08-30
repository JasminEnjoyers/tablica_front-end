import React from "react";
import FiltryStyle from "./FiltryStyle";

export default function SortOptions(props){
    const styles = FiltryStyle();
    const [filtry] = React.useState([
        "dataDodania",
        "ocena"
    ]);

    return(
        <select className={styles.menu}>
            {filtry.map(filtr => <option className={styles.menuOption} key = {filtry.indexOf(filtr)} value = {filtr}>{filtr}</option>)}

        </select>
    )
}
