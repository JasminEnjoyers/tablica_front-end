import React, {useEffect} from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function PhoneUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [phone,setPhone] = React.useState("")
    const [error, setError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)


    async function ValidatePhoneUsed(phone) {
        var result = true;
        await fetch(getApiUrl() + "user/phone/" + phone, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    function ValidatePhone(phone){
        return phone.toLowerCase().match(
            "[0-9]{9}"
        );
    }

    async function updatePhone(event) {
        event.preventDefault();
        if (!ValidatePhone(phone) || await ValidatePhoneUsed(phone)) {
            setError(true);
        } else {
            setError(false);
            fetch(getApiUrl() + "user/phone/" + "?userId=" + user.id + "&newPhone=" + phone, {
                method: "PUT"
            }).then(response => {
                if (response.status === 200) {
                    setErrorAlert(false);
                    setShowAlert(true);
                    user.telefon = phone;
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
            <h3>Zmień Telefon</h3>
            <CardContent>
                <form onSubmit={(event) => updatePhone(event)}>
                    <TextField
                        id="phone"
                        label="Nowy Telefon"
                        variant="outlined"
                        error={error}
                        value={phone}
                        required
                        onChange={(event) => setPhone(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        inputProps={{
                            maxLength: 9,
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
                                <Alert severity="error">Nie udało się zmienić Telefonu</Alert>
                            }
                            {!errorAlert &&
                                <Alert severity="success">Telefon został pomyślnie zmieniony</Alert>
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