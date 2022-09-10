import React from "react";
import CategoryOptions from "./filter/CategoryOptions";
import PostList from "./post/PostList";
import SortOptions from "./filter/SortOptions";
import FeedStyle from "./FeedStyle";

export default function Feed(props){
    const styles = FeedStyle();
    const {user} = props

    const [kategoria, setKategoria] = React.useState("");
    const [sortujWg, setSortujWg] = React.useState("Od najnowszych");

    function kategoriaChanged(value){
        //console.log("kategoriaChanged");
        //console.log(value);
        setKategoria(value);
    }
    function sortChanged(event){
        //console.log("sortChanged");
        //console.log(event.target.value);
        setSortujWg(event.target.value);
    }

    return (
        <div className={styles.feed}>

            <div className={styles.controls}>
                <div className={styles.filter}>
                    <CategoryOptions
                        id="PostListCategoryOptions"
                        kategoria={kategoria}
                        onChange={(event,value)=>kategoriaChanged(event,value)}/>
                </div>
                <div className={styles.filter} >
                    <SortOptions
                        filtr={sortujWg}
                        onChange={event=>sortChanged(event)}/>
                </div>
            </div>

            <div className={styles.feedSection}>
                <PostList user={user}
                          autor={""}
                          kategoria={kategoria}
                          sortujWg={sortujWg}
                          setPost={props.setPost}/>
            </div>
        </div>
    );
}