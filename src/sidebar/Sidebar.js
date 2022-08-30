import React from 'react';
import {Button, Drawer, Menu, TextField} from "@mui/material";
import {Link} from "react-router-dom";

export default function Sidebar(props) {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    function menuButtonClick(event){
        if(menuIsOpen) setMenuIsOpen(false)
        else setMenuIsOpen(true);
    }

    return (
        <div>
            <button
                onClick={menuButtonClick}
            >button
            </button>
            <Drawer
                open={menuIsOpen}
                onClose = {menuButtonClick}
                anchor='left'
            >
                <Link to="/">Home</Link>
                <Link to="/user">USER</Link>
            </Drawer>
        </div>
    );
}