import React from 'react';
import {Button, Drawer, IconButton} from "@mui/material";
import {Link} from "react-router-dom";
import SideBarStyle from ".//SideBarStyle";
//import MenuIcon from '@mui/icons-material/Menu';

export default function Sidebar(props) {
    const styles = SideBarStyle()
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);

    function menuButtonClick(event){
        if(menuIsOpen) setMenuIsOpen(false)
        else setMenuIsOpen(true);
    }

    return (
        <div className={styles.sideContainer}>
            <IconButton
                className={styles.menuButton}
                onClick={menuButtonClick}
                >menu
                {/*<MenuIcon></MenuIcon>*/}
            </IconButton>
            <Drawer
                className={styles.sidePanel}
                open={menuIsOpen}
                onClose = {menuButtonClick}
                anchor='left'
                role='presentation'
            >
                <div className={styles.btnContainer}>
                <Button className={styles.selectButton} component={Link} to="/" variant={"contained"}>Strona główna</Button>
                </div>
                <div className={styles.btnContainer}>
                <Button className={styles.selectButton} component={Link} to="/user" variant={"contained"}>Profil</Button>
                </div>
                <div className={styles.btnContainer}>
                    <Button className={styles.selectButton} component={Link} to="/user/posty" variant={"contained"}>Twoje posty</Button>
                </div>
            </Drawer>
        </div>
    );
}