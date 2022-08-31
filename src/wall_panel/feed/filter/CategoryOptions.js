import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import Category from "./Category";
import FiltryStyle from "./FiltryStyle";
import {MenuItem, Select} from "@mui/material";

export default function CategoryOptions(props){
    const styles = FiltryStyle();
    const [kategorie, setKategorie] = React.useState([]);

    function fetchKategorie(){
        fetch(getApiUrl() + "api/kategorie/kategorie")
            .then(response => response.json())
            .then(kategorie => {
                setKategorie(kategorie);
            });
    }

    useEffect(()=> {
        fetchKategorie()
    },[]);

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