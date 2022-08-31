import React from "react";
import CategoryOptions from "./filter/CategoryOptions";
import PostList from "./post/PostList";
import SortOptions from "./filter/SortOptions";
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

            <div className={styles.controls}>
                <div className={styles.filter} onChange={event=>kategoriaChanged(event)}>
                    <label>Kategoria</label>
                    <CategoryOptions/>
                </div>

                <div className={styles.filter} onChange={event=>sortChanged(event)}>
                    <label>Sortuj według</label>
                    <SortOptions/>
                </div>
            </div>

            <div className={styles.feedSection}>
                <PostList kategoria={kategoria} sortujWg={sortujWg}/>
            </div>
        </div>
    );
}