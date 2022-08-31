import React from "react";
import FiltryStyle from "./FiltryStyle";
import {MenuItem} from "@mui/material";

export default function Category(props){
    const styles = FiltryStyle();
    const {id} = props.data;
    const {nazwa} = props.data;

    return(
        <MenuItem className={styles.menuOption} value={id}>{nazwa}</MenuItem>
    )
}

