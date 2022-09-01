import React from "react";
import FiltryStyle from "./FiltryStyle";
import {MenuItem} from "@mui/material";

export default function Category(props){
    const styles = FiltryStyle();

    const {kategoria} = props;

    return(
        <MenuItem className={styles.menuOption} value={kategoria.nazwa}>{kategoria.nazwa}</MenuItem>
    )
}

