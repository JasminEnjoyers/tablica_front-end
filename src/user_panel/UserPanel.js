import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import UserPanelStyle from "./UserPanelStyle";
import {Alert, Button, Card, CardContent, TextField} from "@mui/material";
import EmailUpdateCard from "./EmailUpdateCard";
import PhoneUpdateCard from "./PhoneUpdateCard";
import FirstNameUpdateCard from "./FirstNameUpdateCard";
import LastNameUpdateCard from "./LastNameUpdateCard";
import LoginUpdateCard from "./LoginUpdateCard";


export default function UserPanel(props) {

    const styles = UserPanelStyle()
    const {user} = props

    return (
        <div className={styles.userBackground}>
            <Sidebar/>
            <h3>Dane użytkownika</h3>
            <Card variant="outlined" className={styles.cardSpacing}>

                <CardContent className={styles.cardContentElements}>
                    <div>email: {user.email}</div>
                    <div>telefon: {user.telefon}</div>
                    <div>reputacja: {user.reputacja}</div>
                    <div>imie: {user.imie}</div>
                    <div>nazwisko: {user.nazwisko}</div>
                    <div>login: {user.nazwa}</div>
                </CardContent>
            </Card>

            <EmailUpdateCard user={user}/>
            <PhoneUpdateCard user={user}/>
            <FirstNameUpdateCard user={user}/>
            <LastNameUpdateCard user={user}/>
            <LoginUpdateCard user={user}/>

        </div>
    );
}