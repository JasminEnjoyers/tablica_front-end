import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import NewPost from "./posty/new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";
import Feed from "./posty/Feed";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props
    const [posty,setPosty] = React.useState(null)

    return (
        <div className={styles.wallBackground}>

            <Sidebar/>

            <div className={styles.feed}>

                <NewPost/>

                <Feed/>
            </div>
        </div>
    );
}