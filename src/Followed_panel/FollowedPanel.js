import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import ReportedPostsPanelStyle from "../reported_posts/ReportedPostsPanelStyle";
import FollowedPostsList from "./FollowedPostsList";


export default function FollowedPanel(props) {
    const styles = ReportedPostsPanelStyle()
    const {user} = props

    return (
        <div className={styles.wallBackground}>
            <Sidebar user={user} userSetter={props.userSetter}/>
            <div>
                <div className={styles.feedContainer}>
                    <div className={styles.feed}>
                        <FollowedPostsList user={user} userSetter={props.userSetter} autor={""}/>
                    </div>
                </div>
            </div>
        </div>
    );
}