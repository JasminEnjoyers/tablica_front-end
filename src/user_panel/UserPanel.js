import React from 'react';
import getApiUrl from "../api/ApiUrl";
import Sidebar from "../sidebar/Sidebar";
import UserPanelStyle from "./UserPanelStyle";
import {Alert, Button, Card, CardContent, TextField} from "@mui/material";


export default function UserPanel(props) {

    const styles = UserPanelStyle()
    const {user} = props

    const [email,setEmail] = React.useState("")
    const [emailError, setEmailError] = React.useState(false)
    const [showEmailAlert,setShowEmailAlert] = React.useState(false)
    const [emailErrorAlert, setEmailErrorAlert] = React.useState(false)

    function ValidateEmail(email){
        return email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    function updateEmail(event){
        event.preventDefault()
        if(!ValidateEmail(email)){
            setEmailError(true);
        }else{
            setEmailError(false);
            fetch(getApiUrl() + "user/email/" + "?userId="+user.id+"&newEmail="+email,{
                method: "PUT"
            }).then(response => {
                if(response.status == 200){
                    setEmailErrorAlert(false);
                    setShowEmailAlert(true);
                    user.email = email;
                }
                else{
                    setEmailErrorAlert(true);
                    setShowEmailAlert(true);
                }
                setTimeout(()=>{setShowEmailAlert(false)},3000);
            })
        }
    }

    return (
        <div className={styles.body}>
            <Sidebar/>
            <Card variant="outlined" className={styles.cardSpacing}>
                <h3>Dane użytkownika</h3>
                <CardContent className={styles.cardContentElements}>
                    <div>email: {user.email}</div>
                    <div>telefon: {user.telefon}</div>
                    <div>reputacja: {user.reputacja}</div>
                    <div>imie: {user.imie}</div>
                    <div>nazwisko: {user.nazwisko}</div>
                    <div>login: {user.nazwa}</div>
                </CardContent>
            </Card>

            <Card variant="outlined" className={styles.cardSpacing}>
                <h3>Zmień email</h3>
                <CardContent>
                    <form onSubmit={(event) => updateEmail(event)}>
                        <TextField
                            id="firstName"
                            label="Nowy Email"
                            variant="outlined"
                            error={emailError}
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            inputProps={{
                                maxLength: 200,
                            }}
                            InputProps={{
                                classes:{
                                    root: styles.formElement,
                                    disabled: styles.formElement,
                                    notchedOutline: styles.formElement
                                }
                            }}
                        />
                        {showEmailAlert &&
                            <div>
                                {emailErrorAlert &&
                                    <Alert severity="error">Nie udało się zmienić emaila</Alert>
                                }
                                {!emailErrorAlert &&
                                    <Alert severity="success">Email został pomyślnie zmieniony</Alert>
                                }
                            </div>
                        }
                        <Button
                            variant="contained"
                            type="submit"
                            style={{margin:10}}
                        >Zmień
                        </Button>
                    </form>
                </CardContent>
            </Card>

            <Card variant="outlined" className={styles.cardSpacing}>
                <CardContent>heyj</CardContent>
            </Card>
        </div>
    );
}