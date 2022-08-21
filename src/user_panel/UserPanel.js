import React from 'react';
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";
import getApiUrl from "../api/ApiUrl";

export default function UserPanel(props) {
    const styles = SignInPanelStyle()
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