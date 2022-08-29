import React from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function EmailUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [email,setEmail] = React.useState("")
    const [error, setError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)


    function ValidateEmail(email){
        return email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    async function ValidateEmailUsed(email) {
        var result = true;
        await fetch(getApiUrl() + "user/email/" + email, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function updateEmail(event) {
        event.preventDefault()
        if (!ValidateEmail(email) || await ValidateEmailUsed(email)) {
            setError(true);
        } else {
            setError(false);
            fetch(getApiUrl() + "user/email/" + "?userId=" + user.id + "&newEmail=" + email, {
                method: "PUT"
            }).then(response => {
                if (response.status == 200) {
                    setErrorAlert(false);
                    setShowAlert(true);
                    user.email = email;
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
            <h3>Zmień email</h3>
            <CardContent>
                <form onSubmit={(event) => updateEmail(event)}>
                    <TextField
                        id="email"
                        label="Nowy Email"
                        variant="outlined"
                        error={error}
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
                    {showAlert &&
                        <div>
                            {errorAlert &&
                                <Alert severity="error">Nie udało się zmienić emaila</Alert>
                            }
                            {!errorAlert &&
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
    );
}