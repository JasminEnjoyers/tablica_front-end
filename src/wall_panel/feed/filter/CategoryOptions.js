import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import Category from "./Category";
import FiltryStyle from "./FiltryStyle";
import {MenuItem, Select} from "@mui/material";

export default function CategoryOptions(props){
    const styles = FiltryStyle();
    const [kategorie, setKategorie] = React.useState([]);



    return(
        <Select className={styles.menu}
            size={"small"}>
            <MenuItem
                className={styles.menuOption}
                value="">...</MenuItem>
            {kategorie.map(kategoria =>
                <Category
                    key = {kategoria.id}
                    data = {kategoria}
                />
            )}
        </Select>
    )
}