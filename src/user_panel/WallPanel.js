import React from 'react';
import WallPanelStyle from "./WallPanelStyle";
import getApiUrl from "../api/ApiUrl";


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
        <div className={styles.positioningBox}>
            {user.email}{posty}
            <button
                variant="contained"
                type="submit"
                onClick={(event) => buttonClick(event)}
            >
                click me
            </button>
        </div>
    );
}