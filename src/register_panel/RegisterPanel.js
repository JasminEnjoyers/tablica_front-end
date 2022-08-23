import React from 'react';
import {Button, TextField} from "@mui/material";
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";
import {Link} from "react-router-dom";
import getApiUrl from "../api/ApiUrl";

export default function RegisterPanel(props) {
    const styles = SignInPanelStyle()
    const [login,setLogin] = React.useState(null)
    const [password,setPassword] = React.useState(null)
    const [email,setEmail] = React.useState(null)
    const [phone,setPhone] = React.useState(null)
    const [firstName,setFirstName] = React.useState(null)
    const [lastName,setLastName] = React.useState(null)

    function SubmitButtonClicked(event){
        event.preventDefault()
        console.log(event)
        console.log(login.size)
        if(login?.length === 0) setLogin(null)
        if(password?.length === 0) setPassword(null)
        if(email?.length === 0) setEmail(null)
        if(phone?.length === 0) setPhone(null)
        if(firstName?.length === 0) setFirstName(null)
        if(lastName?.length === 0) setLastName(null)

        fetch(getApiUrl()+ "register?login=" + login
            + "&password=" + password
            + "&email=" + email
            + "&phone=" + phone
            + "&firstName=" + firstName
            + "&lastName=" + lastName, {
            method: "POST",
            credentials: "include"
        }).then(response => {
            try{
                response.json().then(result => {
                    console.log(result);
                        if(result.id != null) props.userSetter(result);
                    }
                )
            }catch (err){
                console.log("error",err);
            }
        })
    }

    return (
        <div className={styles.positioningBox}>
            <div className={styles.loginBox}>
                <form onSubmit={(event) => SubmitButtonClicked(event)}>
                    <TextField
                        id="login"
                        label="login*"
                        variant="outlined"
                        value={login}
                        onChange={(event) => setLogin(event.target.value)}
                        fullWidth
                        autoComplete='off'
                        inputProps={{
                            maxLength: 24,
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
                        id="password"
                        label="hasło*"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        fullWidth
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
                        id="email"
                        label="email*"
                        variant="outlined"
                        value={email}
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
                    <TextField
                        id="phone"
                        label="numer telefonu"
                        variant="outlined"
                        value={phone}
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
                            },
                        }}
                    />
                    <TextField
                        id="firstName"
                        label="imie*"
                        variant="outlined"
                        value={firstName}
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
                    <TextField
                        id="lastName"
                        label="nazwisko*"
                        variant="outlined"
                        value={lastName}
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
                    <div className={styles.formElement}>
                        masz konto? <Link to="/" className={styles.register}>Zaloguj się!</Link>
                    </div>
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles.formElement}
                    >Zarejestruj się
                    </Button>
                </form>
            </div>
        </div>
    );
}