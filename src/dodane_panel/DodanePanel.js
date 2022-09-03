import React from 'react';

import Sidebar from "../sidebar/Sidebar";
import DodanePanelStyle from "./DodanePanelStyle";
import PostList from "../wall_panel/feed/post/PostList";


export default function DodanePanel(props) {
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
                    <PostList autor = {user.nazwa} sortujWg={"dataDodania"}></PostList>
                </div>
            </div>
        </div>
    );
}