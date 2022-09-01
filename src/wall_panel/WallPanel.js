import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import NewPost from "./feed/new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";
import Feed from "./feed/Feed";


export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props

    return (
        <div className={styles.wallBackground}>
            <Sidebar/>
            <div>
                <div className={styles.newPostContainer}>
                    <NewPost></NewPost>
                </div>

                <div className={styles.feedContainer}>
                    <Feed></Feed>
                </div>
            </div>
        </div>
    );
}