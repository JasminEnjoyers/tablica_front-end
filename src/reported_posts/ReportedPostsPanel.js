import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import ReportedPostsPanelStyle from "./ReportedPostsPanelStyle";
import ReportedPostsList from "./ReportedPostsList";


export default function ReportedPostsPanel(props) {
    const styles = ReportedPostsPanelStyle()
    const {user} = props

    return (
        <div className={styles.wallBackground}>
            <Sidebar user={user} userSetter={props.userSetter}/>
            <div>
                <div className={styles.feedContainer}>
                    <div className={styles.feed}>
                        <ReportedPostsList/>
                    </div>
                </div>
            </div>
        </div>
    );
}