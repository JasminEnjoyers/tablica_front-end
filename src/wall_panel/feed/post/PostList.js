import React from "react";
import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import {renderToString} from "react-dom/server";
import PostStyle from "./PostStyle";

export default function PostList(props){
    const styles = PostStyle();
    const {sortujWg} = props;
    const {kategoria} = props;
    let posts = [];

    function dataSorted(posty){
        return [...posty].sort((a,b) => (new Date(b.data).getTime()) - (new Date(a.data).getTime()));
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
                posts = ((sortujWg==="dataDodania")?dataSorted(posty):sorted(posty));
                //console.log(posts)
                document.getElementById("postListContainer").innerHTML = "";
                posts.slice(0,10)
                    .forEach(
                        (post) => document.getElementById("postListContainer")
                            .innerHTML += renderToString(
                                <Post key={post.id} post={post}/>
                        ))
            });
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            let content =  document.getElementById("postListContainer");
            let last = content.children.length;
            posts.slice(last,last+5).forEach((post) => content.innerHTML += renderToString(<Post key={post.id} post={post}/>))
        }
    };

    return(
        <div className={styles.postList} id={"postListContainer"} onLoad={fetchPosty()}>
        </div>
    );
}