import React from "react";
import FiltryStyle from "./FiltryStyle";

export default function Category(props){
    const styles = FiltryStyle();
    const {id} = props.data;
    const {nazwa} = props.data;

    return(
        <option className={styles.menuOption} value={id}>{nazwa}</option>
    )
}

