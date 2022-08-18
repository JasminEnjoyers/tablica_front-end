import React from 'react';
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";

export default function UserPanel(props) {
    const styles = SignInPanelStyle()
    const {user} = props

    return (
        <div className={styles.positioningBox}>
            {user}
        </div>
    );
}