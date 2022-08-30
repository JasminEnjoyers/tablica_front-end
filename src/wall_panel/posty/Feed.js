import React from "react";
import CategoryOptions from "./filtry/CategoryOptions";
import PostList from "./posty/PostList";
import SortOptions from "./filtry/SortOptions";
import FeedStyle from "./FeedStyle";

export default function Feed(props){
    const styles = FeedStyle();
    const [kategoria, setKategoria] = React.useState("");
    const [sortujWg, setSortujWg] = React.useState("dataDodania");

    function kategoriaChanged(event){
        setKategoria(event.target.value);
    }
    function sortChanged(event){
        setSortujWg(event.target.value);
    }

    return (
        <div className={styles.feed}>
            <div onChange={event=>kategoriaChanged(event)}>
                <label>Kategoria</label>
                <CategoryOptions/>
            </div>
            <div onChange={event=>sortChanged(event)}>
                <label>Sortuj według</label>
                <SortOptions/>
            </div>

            <PostList kategoria={kategoria} sortujWg={sortujWg}/>
        </div>
    );
}