import React from 'react';
import {Button, TextField} from "@mui/material";
import SignInPanelStyle from "../sign_in_panel/SignInPanelStyle";
import {Link} from "react-router-dom";
import getApiUrl from "../api/ApiUrl";

export default function RegisterPanel(props) {
    const styles = SignInPanelStyle()
    const [login,setLogin] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [phone,setPhone] = React.useState("")
    const [firstName,setFirstName] = React.useState("")
    const [lastName,setLastName] = React.useState("")
    const [error,setError] = React.useState("")
    const [showError, setShowError] = React.useState(false)
    const [loginError, setLoginError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [phoneError, setPhoneError] = React.useState(false)

    function ValidateEmail(email){
        return email.toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    function ValidatePhone(phone){
        return phone.toLowerCase().match(
            "[0-9]{9}"
        );
    }

    function SubmitButtonClicked(event){
        event.preventDefault();

        var fetchBool = true;

        if(login?.length < 4 || login == null){
            setError("zbyt krótki login");
            setShowError(true);
            fetchBool = false;
        }
        if(password?.length < 4 || password == null){
            setError("zbyt łatwe hasło");
            setShowError(true);
            fetchBool = false;
        }
        if(!ValidateEmail(email)){
            setError("błędny adres email");
            setShowError(true);
            fetchBool = false;
        }
        if(!ValidatePhone(phone)){
            setError("błędny numer telefonu");
            setShowError(true);
            fetchBool = false;
        }
        if(firstName?.length < 1 || firstName == null){
            setError("wprowadz imie");
            setShowError(true);
            fetchBool = false;
        }
        if(lastName?.length < 1 || lastName == null){
            setError("wprowadz nazwisko");
            setShowError(true);
            fetchBool = false;
        }

        if(fetchBool) {
            fetch(getApiUrl() + "user/login/" + login,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setLoginError(Boolean(result))
                    }
                )
            })
            fetch(getApiUrl() + "user/email/" + email,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setEmailError(Boolean(result))
                    }
                )
            })
            fetch(getApiUrl() + "user/phone/" + phone,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setPhoneError(Boolean(result))
                    }
                )
            })
            console.log("loginError= " + loginError)
            console.log("emailError= " + emailError)
            console.log("phoneError= " + phoneError)

            if(!loginError && !emailError && !phoneError)
            fetch(getApiUrl() + "register?login=" + login
                + "&password=" + password
                + "&email=" + email
                + "&phone=" + phone
                + "&firstName=" + firstName
                + "&lastName=" + lastName, {
                method: "POST",
                credentials: "include"
            }).then(response => {
                try {
                    response.json().then(result => {
                            if (result.id != null) props.userSetter(result);
                        }
                    )
                } catch (err) {
                    console.log("error", err);
                }
            })
        }
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
                        label="numer telefonu*"
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
                    {showError &&
                        <div>{error}</div>
                    }
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