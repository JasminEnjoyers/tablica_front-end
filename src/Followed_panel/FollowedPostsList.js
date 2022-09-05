import React, {useEffect} from "react";
import getApiUrl from "../api/ApiUrl";
import Post from "../wall_panel/feed/post/Post";
import PostStyle from "../wall_panel/feed/post/PostStyle";

export default function FollowedPostsList(props){
    const styles = PostStyle();
    const {user} = props;
    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(10);
    var postId = 0;

    function handleUnfollowClicked(post){
        fetch(getApiUrl() + "followed/delete?userId="+user.id+"&postId="+post.id, {
            method: "DELETE"
        }).then(response => {})
    }
    function handleReportClicked(post){
        fetch(getApiUrl() + "report/add?ogloszenieId="+post.id+"&uzytkownikId="+user.id, {
            method: "PUT"
        }).then(response => {})
    }

    const PostFooter = (post) =>{
        return(
            <div
                className={styles.postFooter}>
                <button post={post} onClick={()=>handleUnfollowClicked(post)}>Usuń z obserwowanych</button>
                <button post={post} onClick={()=>handleReportClicked(post)}>Zgłoś</button>
            </div>
        )
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
            setLast(last+5);
        }
    };

    useEffect(()=>{
        let url = getApiUrl() + "followed/all/?userId="+user.id;
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                setPosty(posty);
                console.log(posty);
            });
    },[])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {posty.slice(0,last).map(post => <Post key={post.id}
                                                   post={post}
                                                   id={postId++}
                                                   footer={PostFooter(post)}
            />)}
        </div>
    );
}