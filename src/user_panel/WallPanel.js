import React from 'react';
import {Button, TextField} from "@mui/material";
import WallPanelStyle from "../user_panel/WallPanelStyle";
import {Link} from "react-router-dom";
import getApiUrl from "../api/ApiUrl";
import NewPost from "../new_post/NewPost";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props

    const [posty,setPosty] = React.useState(null)

    function buttonClick(event){
        fetch(getApiUrl(), {
            method: "GET",
        }).then((response) => {
            response.json().then(r => {
                r.forEach(console.log);
            })
        })
    }

    return (
        <div className={styles.wallBackground}>
        <div className={styles.feed}>

            <NewPost></NewPost>

            {/*{user.email}{posty}*/}
            {/*<button
                variant="contained"
                type="submit"
                onClick={(event) => buttonClick(event)}
            >
                peep the po
            </button>*/}
        </div>
        </div>
    );
}