import React from 'react';

import Sidebar from "../sidebar/Sidebar";
import DodanePanelStyle from "./UserPostsPanelStyle";
import PostList from "../wall_panel/feed/post/PostList";


export default function UserPostsPanel(props) {
    const styles = DodanePanelStyle()
    const {user} = props

    return (
        <div className={styles.wallBackground}>
            <Sidebar/>
            <div className={styles.feed}>
                <div className={styles.header}>
                    Twoje ogłoszenia:
                </div>
                <div className={styles.feedSection}>
                    <PostList user={user} autor = {user.nazwa} sortujWg={"dataDodania"}></PostList>
                </div>
            </div>
        </div>
    );
}