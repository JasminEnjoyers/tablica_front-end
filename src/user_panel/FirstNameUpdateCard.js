import React from 'react';
import {Alert, Button, Card, CardContent, Drawer, Menu, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";
import UserPanelStyle from "./UserPanelStyle";


export default function FirstNameUpdateCard(props) {
    const styles = UserPanelStyle()
    const {user} = props
    const [firstName,setFirstName] = React.useState("")
    const [error, setError] = React.useState(false)
    const [showAlert,setShowAlert] = React.useState(false)
    const [errorAlert, setErrorAlert] = React.useState(false)


    function ValidateFirstName(firstName){
        if(firstName.length > 1 && firstName != null) return true
        return false
    }

    function updateEmail(event){
        event.preventDefault()
        if(!ValidateFirstName(firstName)){
            setError(true);
        }else{
            setError(false);
            fetch(getApiUrl() + "user/firstName/" + "?userId="+user.id+"&newFirstName="+firstName,{
                method: "PUT"
            }).then(response => {
                if(response.status == 200){
                    setErrorAlert(false);
                    setShowAlert(true);
                    user.imie = firstName;
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
            <h3>Zmień Imie</h3>
            <CardContent>
                <form onSubmit={(event) => updateEmail(event)}>
                    <TextField
                        id="firstName"
                        label="Nowe imie"
                        variant="outlined"
                        error={error}
                        value={firstName}
                        required
                        onChange={(event) => setFirstName(event.target.value)}
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
                                <Alert severity="error">Nie udało się zmienić Imienia</Alert>
                            }
                            {!errorAlert &&
                                <Alert severity="success">Imie zostało pomyślnie zmienione</Alert>
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