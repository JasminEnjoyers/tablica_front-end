import React from 'react';
import Sidebar from "../sidebar/Sidebar";
import UserPanelStyle from "./UserPanelStyle";
import {Card, CardContent} from "@mui/material";
import EmailUpdateCard from "./EmailUpdateCard";
import PhoneUpdateCard from "./PhoneUpdateCard";
import FirstNameUpdateCard from "./FirstNameUpdateCard";
import LastNameUpdateCard from "./LastNameUpdateCard";
import LoginUpdateCard from "./LoginUpdateCard";
import PasswordUpdateCard from "./PasswordUpdateCard";


export default function UserPanel(props) {

    const styles = UserPanelStyle()
    const {user} = props
    const [email, setEmail] = React.useState(user.email)
    const [telefon, setTelefon] = React.useState(user.telefon)
    const [imie, setImie] = React.useState(user.imie)
    const [nazwisko, setNazwisko] = React.useState(user.nazwisko)
    const [login, setLogin] = React.useState(user.nazwa)

    return (
        <div className={styles.userBackground}>
            <Sidebar user={user} userSetter={props.userSetter}/>
            <h3>Dane użytkownika</h3>
            <Card variant="outlined" className={styles.cardSpacing}>

                <CardContent className={styles.cardContentElements}>
                    <div>email: {email}</div>
                    <div>telefon: {telefon}</div>
                    <div>imie: {imie}</div>
                    <div>nazwisko: {nazwisko}</div>
                    <div>login: {login}</div>
                </CardContent>
            </Card>

            <EmailUpdateCard user={user} setEmail={setEmail}/>
            <PhoneUpdateCard user={user} setTelefon={setTelefon}/>
            <FirstNameUpdateCard user={user} setImie={setImie}/>
            <LastNameUpdateCard user={user} setNazwisko={setNazwisko}/>
            <LoginUpdateCard user={user} setLogin={setLogin}/>
            <PasswordUpdateCard user={user}/>

        </div>
    );
}