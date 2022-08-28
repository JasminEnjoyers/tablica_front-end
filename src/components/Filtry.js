import React from "react";
import KategoriaListComponent from "./KategoriaListComponent";
import PostListComponent from "./PostListComponent";

export default function Filtry(props){
    const [kategoria, setKategoria] = React.useState("");

    function kategoriaChanged(event){
        setKategoria(event.target.value);
    }

    return (
        <div>
            <form onChange={event=>kategoriaChanged(event)}>
                <label>Kategoria</label>
                <KategoriaListComponent/>
                <label>Sortuj według</label>

            </form>

            <PostListComponent kategoria={kategoria}/>
        </div>
    );
}