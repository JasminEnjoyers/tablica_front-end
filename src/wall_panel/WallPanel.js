import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import NewPost from "./feed/new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";
import Feed from "./feed/Feed";


export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props

    const [post, setPost] = React.useState({
        id:null,
        tytul:"",
        tekst:"",
        autor:"",
        data:"",
        kategoria:"",
        obserwuje:false,
    })

    //console.log(post);

    return (
        <div className={styles.wallBackground}>
            <Sidebar user={user} userSetter={props.userSetter}/>
            <div>
                <div className={styles.newPostContainer}>
                    <NewPost
                        user={user}
                        post={post}
                        setPost={setPost}>
                    </NewPost>
                </div>

                <div className={styles.feedContainer}>
                    <Feed user={user} setPost={setPost}></Feed>
                </div>
            </div>
        </div>
    );
}