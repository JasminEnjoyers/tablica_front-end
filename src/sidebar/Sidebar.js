import React from 'react';
import {Button, Drawer, Menu, TextField} from "@mui/material";
import {Link} from "react-router-dom";

export default function Sidebar(props) {

    return (
        <Drawer {...props}>
            <Link to="/">Home</Link>
            <Link to="/user">USER</Link>
        </Drawer>
    );
}