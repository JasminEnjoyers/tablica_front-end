import React, {useEffect} from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function PasswordUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [password,setPassword] = React.useState("")
    const [newPassword,setNewPassword] = React.useState("")
    const [newPassword2,setNewPassword2] = React.useState("")
    const [error, setError] = React.useState(false)
    const [newPasswordError, setNewPasswordError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)


    async function ValidatePasswordUsed(password) {
        var result = true;
        await fetch(getApiUrl() + "user/password/" + "?userId=" + user.id + "&password=" + password, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
            if(result){
                setError(false);
            }
            else setError(true);
        })
        return result;
    }

    function ValidatePassword(password){
        return (password.length > 3);
    }

    function ValidateNewPassword(password,password2){
        if(password != password2){
            setNewPasswordError(true);
            return false;
        }
        if(!ValidatePassword(password)){
            setNewPasswordError(true);
            return false;
        }
        setNewPasswordError(false);
        return true
    }

    async function updatePassword(event) {
        event.preventDefault();
        if (!ValidatePassword(password) || !(await ValidatePasswordUsed(password)) || !ValidateNewPassword(newPassword, newPassword2)) {
            setError(true);
        } else {
            setError(false);
            fetch(getApiUrl() + "user/password/" + "?userId=" + user.id + "&newPassword=" + newPassword, {
                method: "PUT"
            }).then(response => {
                if (response.status == 200) {
                    setErrorAlert(false);
                    setShowAlert(true);
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
            <h3>Zmień Hasło</h3>
            <CardContent>
                <form onSubmit={(event) => updatePassword(event)}>
                    <TextField
                        id="hasło"
                        label="obecne hasło"
                        variant="outlined"
                        error={error}
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        type="password"
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
                    <TextField
                        id="noweHasło"
                        label="nowe hasło"
                        variant="outlined"
                        error={newPasswordError}
                        value={newPassword}
                        required
                        onChange={(event) => setNewPassword(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        type="password"
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
                    <TextField
                        id="noweHasło2"
                        label="powtórz nowe hasło"
                        variant="outlined"
                        error={newPasswordError}
                        value={newPassword2}
                        required
                        onChange={(event) => setNewPassword2(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        type="password"
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
                                <Alert severity="error">Nie udało się zmienić Hasła</Alert>
                            }
                            {!errorAlert &&
                                <Alert severity="success">Hasło został pomyślnie zmieniony</Alert>
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