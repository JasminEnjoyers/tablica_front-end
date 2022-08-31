import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import NewPost from "./feed/new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";
import Feed from "./feed/Feed";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props
    const [posty,setPosty] = React.useState(null)

    return (
        <div className={styles.wallBackground}>

            <Sidebar/>

            <div>
                <NewPost/>

                <Feed/>
            </div>
        </div>
    );
}