import React, {useEffect} from "react";
import PostStyle from "../wall_panel/feed/post/PostStyle";
import getApiUrl from "../api/ApiUrl";
import ReportedPost from "./ReportedPost";

export default function ReportedPostsList(props){
    const styles = PostStyle();

    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(10);
    var postId = 0;


    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
            setLast(last+5);
        }
    };

    useEffect(()=>{
        let url = getApiUrl() + "reported/all";
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                setPosty(posty);
            });
    },[])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {posty.slice(0,last).map(post => <ReportedPost key={"" + post.id + postId} post={post} id={postId++}/>)}
        </div>
    );
}
