import React from "react";
import KategoriaListComponent from "./KategoriaListComponent";
import PostListComponent from "./PostListComponent";
import SortowanieListComponent from "./SortowanieListComponent";

export default function Filtry(props){
    const [kategoria, setKategoria] = React.useState("");
    const [sortujWg, setSortujWg] = React.useState("dataDodania");

    function kategoriaChanged(event){
        setKategoria(event.target.value);
    }
    function sortChanged(event){
        setSortujWg(event.target.value);
    }

    return (
        <div>
            <div onChange={event=>kategoriaChanged(event)}>
                <label>Kategoria</label>
                <KategoriaListComponent/>
            </div>
            <div onChange={event=>sortChanged(event)}>
                <label>Sortuj według</label>
                <SortowanieListComponent/>
            </div>

            <PostListComponent kategoria={kategoria} sortujWg={sortujWg}/>
        </div>
    );
}