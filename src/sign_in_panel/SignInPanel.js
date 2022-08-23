import React from 'react';
import {Button, TextField} from "@mui/material";
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";
import {Link} from "react-router-dom";
import getApiUrl from "../api/ApiUrl";


export default function SingInPanel(props) {
    const styles = SignInPanelStyle()
    const [login,setLogin] = React.useState("")
    const [password,setPassword] = React.useState("")

    function SubmitButtonClicked(event){
        event.preventDefault()
        fetch(getApiUrl()+ "?login=" + login + "&password=" + password, {
            method: "GET",
            credentials: "include"
        }).then(response => {
                try{
                    response.json().then(result => props.userSetter(result))
                }catch (err){
                    console.log("error",err)
                }
            })
    }

    return (
        <div className={styles.logInBackground}>
        <div className={styles.positioningBox}>
            <div className={styles.loginBox}>
                <img
                    src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/mozilla/36/lock_1f512.png"
                    className={styles.logo}
                    alt="heh"
                />

                <form onSubmit={(event) => SubmitButtonClicked(event)}>
                    <TextField
                        id="login"
                        label="login"
                        variant="outlined"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        InputProps={{
                            classes:{
                                root: styles.formElement,
                                disabled: styles.formElement,
                                notchedOutline: styles.formElement
                            }
                        }}
                    />
                    <TextField
                        id="password"
                        label="hasło"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        InputProps={{
                            classes:{
                                root: styles.formElement,
                                disabled: styles.formElement,
                                notchedOutline: styles.formElement
                            }
                        }}
                    />
                    <div className={styles.registerTextBox}>
                        Nie masz konta? <Link to="/register" className={styles.register}>Zarejestruj się!</Link>
                    </div>
                    <div className={styles.button}>
                        <Button
                            variant="contained"
                            type="submit">
                        Zaloguj
                        </Button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}