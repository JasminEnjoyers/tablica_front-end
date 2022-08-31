import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import Category from "./Category";
import FiltryStyle from "./FiltryStyle";

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
        <select className={styles.menu}>
            <option value="">...</option>
            {kategorie.map(kategoria => <Category key = {kategoria.id} data = {kategoria}/>)}
        </select>
    )
}