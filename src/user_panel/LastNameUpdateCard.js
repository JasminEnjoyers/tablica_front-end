import React from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function LastNameUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [lastName,setLastName] = React.useState("")
    const [error, setError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)


    function ValidateLastName(firstName){
        if(lastName.length > 1 && lastName != null) return true
        return false
    }

    function updateEmail(event){
        event.preventDefault()
        if(!ValidateLastName(lastName)){
            setError(true);
        }else{
            setError(false);
            fetch(getApiUrl() + "user/lastName/" + "?userId="+user.id+"&newLastName="+lastName,{
                method: "PUT"
            }).then(response => {
                if(response.status == 200){
                    setErrorAlert(false);
                    setShowAlert(true);
                    user.nazwisko = lastName;
                }
                else{
                    setErrorAlert(true);
                    setShowAlert(true);
                }
                setTimeout(()=>{setShowAlert(false)},3000);
            })
        }
    }

    return (
        <Card variant="outlined" className={styles.cardSpacing}>
            <h3>Zmień Nazwisko</h3>
            <CardContent>
                <form onSubmit={(event) => updateEmail(event)}>
                    <TextField
                        id="lastName"
                        label="Nowe Nazwisko"
                        variant="outlined"
                        error={error}
                        value={lastName}
                        required
                        onChange={(event) => setLastName(event.target.value)}
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
                                <Alert severity="error">Nie udało się zmienić Nazwiska</Alert>
                            }
                            {!errorAlert &&
                                <Alert severity="success">Nazwisko zostało pomyślnie zmienione</Alert>
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