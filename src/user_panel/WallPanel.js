import React from 'react';
import WallPanelStyle from "./WallPanelStyle";
import {Button, TextField} from "@mui/material";
import {Link} from "react-router-dom";


export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props

    return (
        <div className={styles.positioningBox}>
            {user}
        </div>
    );
}