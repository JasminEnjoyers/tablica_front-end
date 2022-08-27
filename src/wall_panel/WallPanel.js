import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import getApiUrl from "../api/ApiUrl";
import NewPost from "../new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props
    const [posty,setPosty] = React.useState(null)

    return (
        <div className={styles.wallBackground}>

            <Sidebar/>

            <div className={styles.feed}>

                <NewPost></NewPost>

            </div>
        </div>
    );
}