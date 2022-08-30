import React from "react";
import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import {renderToString} from "react-dom/server";
import PostStyle from "./PostStyle";

export default function PostList(props){
    const styles = PostStyle();
    const {sortujWg} = props;
    const {kategoria} = props;

    function dataSorted(posty){
        return [...posty].sort((a,b) => (new Date(a.data).getTime()) - (new Date(b.data).getTime()));
    }
    function sorted(posty){
        return [...posty].sort((a,b) => b[sortujWg]-a[sortujWg]);
    }

    function fetchPosty(){
        let url = getApiUrl() + "api/posty/posty";
        if(kategoria!==""){
            url = url + "?kategoria=" + kategoria;
        }
         fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                document.getElementById("postListContainer").innerHTML = "";
                ((sortujWg==="dataDodania")?dataSorted(posty):sorted(posty)).forEach((post) => document.getElementById("postListContainer").innerHTML += renderToString(<Post key={post.id} post={post}/>))
            });
    }

    return(
        <div className={styles.postList} id={"postListContainer"} onLoad={fetchPosty()}>
        </div>
    );
}