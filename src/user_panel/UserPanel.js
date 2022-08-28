import React from 'react';
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";
import Filtry from "../components/Filtry";


export default function UserPanel(props) {
    const styles = SignInPanelStyle()
    const {user} = props


    /*function buttonClick(event){
        fetch(getApiUrl(), {
            method: 'post'
        }).then((response) => {
            response.json().then(r => {
                r.forEach(console.log);
            })
        })
    }*/

    return (
        <div className={styles.positioningBox}>
            {user.email}
            <Filtry/>


        </div>
    );
}