import React from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import getApiUrl from "../api/ApiUrl";
import NewPost from "../new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [posty,setPosty] = React.useState(null)

    function menuButtonClick(event){
        if(menuIsOpen) setMenuIsOpen(false)
        else setMenuIsOpen(true);
        console.log(menuIsOpen);
    }



    return (
        <div id="main" className={styles.wallBackground}>

            <button
                onClick={menuButtonClick}
            >button
            </button>

            {menuIsOpen === true &&
                <Sidebar
                    open={menuIsOpen}
                    onClose = {menuButtonClick}
                    anchor='left'
                />
            }

            <div id="wall" className={styles.feed}>

                <NewPost></NewPost>

            </div>
        </div>
    );
}