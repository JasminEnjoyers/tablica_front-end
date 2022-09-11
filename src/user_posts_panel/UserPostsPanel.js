import React from 'react';

import Sidebar from "../sidebar/Sidebar";
import DodanePanelStyle from "./UserPostsPanelStyle";
import PostList from "../wall_panel/feed/post/PostList";
import NewPost from "../wall_panel/feed/new_post/NewPost";


export default function UserPostsPanel(props) {
    const styles = DodanePanelStyle()
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
            <div className={styles.feed}>
                <div className={styles.header}>
                    Twoje ogłoszenia:
                </div>
                <div className={styles.feedSection}>
                    <PostList user={user}
                              autor={user.nazwa}
                              sortujWg={"Od najnowszych"}
                              setPost={setPost}></PostList>
                </div>
            </div>
                </div>
        </div>
    );
}