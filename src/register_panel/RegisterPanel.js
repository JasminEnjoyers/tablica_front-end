import React from 'react';
import {Button, TextField} from "@mui/material";
import RegisterPanelStyle from "../register_panel/RegisterPanelStyle";
import {Link} from "react-router-dom";
import getApiUrl from "../api/ApiUrl";

export default function RegisterPanel(props) {
    const styles = RegisterPanelStyle()
    const [login,setLogin] = React.useState("")
    const [password,setPassword] = React.useState("")
    const [email,setEmail] = React.useState("")
    const [phone,setPhone] = React.useState("")
    const [firstName,setFirstName] = React.useState("")
    const [lastName,setLastName] = React.useState("")

    const [loginError, setLoginError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [firstNameError, setFirstNameError] = React.useState(false)
    const [lastNameError, setLastNameError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [phoneError, setPhoneError] = React.useState(false)

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

    async function ValidateLoginUsed(login) {
        var result = true;
        await fetch(getApiUrl() + "user/login/" + login, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    function ValidateLogin(login){
        return (login.length > 3);
    }

    function ValidateFirstName(firstName){
        return (firstName.length > 1);
    }

    function ValidateLastName(lastName){
        return (lastName.length > 1);
    }

    function ValidatePassword(password){
        return (password.length > 3);
    }




    async function SubmitButtonClicked(event) {
        event.preventDefault();
        var functionEmailError = false;
        var functionLoginError = false;
        var functionPhoneError = false;
        var functionPasswordError = false;
        var functionFirstNameError = false;
        var functionLastNameError = false;

        if (!ValidateEmail(email) || await ValidateEmailUsed(email)){
            setEmailError(true);
            functionEmailError = true;
        }
        else{
            setEmailError(false);
            functionEmailError = false;
        }

        if (!ValidatePhone(phone) || await ValidatePhoneUsed(phone)){
            setPhoneError(true);
            functionPhoneError = true;
        }
        else{
            setPhoneError(false);
            functionPhoneError = false;
        }

        if (!ValidateLogin(login) || await ValidateLoginUsed(login)){
            setLoginError(true);
            functionLoginError = true;
        }
        else{
            setLoginError(false);
            functionLoginError = false;
        }

        if(!ValidatePassword(password)){
            setPasswordError(true);
            functionPasswordError = true;
        }
        else{
            setPasswordError(false);
            functionPasswordError = false;
        }

        if(!ValidateFirstName(firstName)){
            setFirstNameError(true);
            functionFirstNameError = true;
        }
        else{
            setFirstNameError(false);
            functionFirstNameError = false;
        }

        if(!ValidateLastName(lastName)){
            setLastNameError(true);
            functionLastNameError = true;
        }
        else{
            setLastNameError(false);
            functionLastNameError = false;
        }

        if (!functionLoginError && !functionEmailError && !functionPhoneError && !functionPasswordError && !functionFirstNameError && !functionLastNameError) {
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
        <div className={styles.RegisterPanelBackground}>
            <div className={styles.positioningBox}>
                <div className={styles.loginBox}>
                    <form onSubmit={(event) => SubmitButtonClicked(event)}>
                        <TextField
                            id="firstName"
                            placeholder={"Imię"}
                            variant="outlined"
                            value={firstName}
                            required
                            onChange={(event) => setFirstName(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            error={firstNameError}
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
                            placeholder={"Nazwisko"}
                            variant="outlined"
                            value={lastName}
                            required
                            onChange={(event) => setLastName(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            error={lastNameError}
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
                            id="login"
                            placeholder={"Nazwa Użytkownika"}
                            variant="outlined"
                            value={login}
                            required
                            onChange={(event) => setLogin(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            error={loginError}
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
                            placeholder={"Hasło"}
                            type="password"
                            variant="outlined"
                            value={password}
                            required
                            onChange={(event) => setPassword(event.target.value)}
                            fullWidth
                            error={passwordError}
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
                            placeholder={"Adres e-mail"}
                            variant="outlined"
                            value={email}
                            required
                            onChange={(event) => setEmail(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            error={emailError}
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
                            placeholder={"Numer telefonu"}
                            variant="outlined"
                            value={phone}
                            required
                            onChange={(event) => setPhone(event.target.value)}
                            fullWidth
                            autoComplete='off'
                            error={phoneError}
                            inputProps={{
                                maxLength: 9,
                            }}
                            InputProps={{
                                classes:{
                                    root: styles.formElement,
                                    disabled: styles.formElement,
                                    notchedOutline: styles.formElement,
                                },
                            }}
                        />
                        <div className={styles.formElement}>
                            masz konto? <Link to="/" className={styles.register}>Zaloguj się!</Link>
                        </div>
                        <div className={styles.button}>
                        <Button
                            variant="contained"
                            type="submit"
                        >Zarejestruj się
                        </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}