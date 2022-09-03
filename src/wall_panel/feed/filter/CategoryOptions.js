import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import FiltryStyle from "./FiltryStyle";
import {Menu, MenuItem, MenuList, Select} from "@mui/material";

export default function CategoryOptions(props){
    const styles = FiltryStyle();
    const [kategorie, setKategorie] = React.useState([]);
    const {kategoria} = props;

    function fetchKategorie(){
        fetch(getApiUrl() + "kategorie")
            .then(response => response.json())
            .then(kategorie => {
                //console.log("fetch");
                //console.log(kategorie);
                setKategorie(kategorie);
            });
    }

    useEffect(()=>{
        fetchKategorie();
    },[])


    return(
        <div className={styles.label}>
            Kategoria:
        <Select id={props.id} className={styles.menu}
                size={"small"}
                value={kategoria}
                >

            <MenuItem
                className={styles.menuOption}
                value={""}
                onClick={()=>props.onChange("")}>...</MenuItem>
            {kategorie.map(kat =>
                <MenuItem
                    className={styles.menuOption}
                    key = {props.id+kat.id}
                    value = {kat.nazwa}
                    onClick={()=>props.onChange(kat.nazwa)}
                >{kat.nazwa}</MenuItem>
            )}
        </Select>
        </div>
    )
}