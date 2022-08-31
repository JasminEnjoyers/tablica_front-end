import React from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function LoginUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [login,setLogin] = React.useState("")
    const [error, setError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)

    function ValidateLogin(login){
        if(login.length < 4) return false
        else return true
    }

    async function ValidateLoginUsed(login) {
        var result = true;
        await fetch(getApiUrl() + "user/login/" + login, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function updateLogin(event) {
        event.preventDefault()
        if (!ValidateLogin(login) || await ValidateLoginUsed(login)) {
            setError(true);
        } else {
            setError(false);
            fetch(getApiUrl() + "user/login/" + "?userId=" + user.id + "&newLogin=" + login, {
                method: "PUT"
            }).then(response => {
                if (response.status == 200) {
                    setErrorAlert(false);
                    setShowAlert(true);
                    user.nazwa = login;
                } else {
                    setErrorAlert(true);
                    setShowAlert(true);
                }
                setTimeout(() => {
                    setShowAlert(false)
                }, 3000);
            })
        }
    }

    return (
        <Card variant="outlined" className={styles.cardSpacing}>
            <h3>Zmień Login</h3>
            <CardContent>
                <form onSubmit={(event) => updateLogin(event)}>
                    <TextField
                        id="login"
                        label="Login"
                        variant="outlined"
                        error={error}
                        value={login}
                        required
                        onChange={(event) => setLogin(event.target.value)}
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
                    {showAlert &&
                        <div>
                            {errorAlert &&
                                <Alert severity="error">Nie udało się zmienić Loginu</Alert>
                            }
                            {!errorAlert &&
                                <Alert severity="success">Login został pomyślnie zmieniony</Alert>
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
    );
}