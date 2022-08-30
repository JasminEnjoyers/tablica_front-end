import React, {useEffect} from "react";
import getApiUrl from "../api/ApiUrl";
import KategoriaComponent from "./KategoriaComponent";

export default function KategoriaListComponent(props){
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
        <select>
            <option value="">...</option>
            {kategorie.map(kategoria => <KategoriaComponent key = {kategoria.id} data = {kategoria}/>)}
        </select>
    )
}