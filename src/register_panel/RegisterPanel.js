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
    const [error,setError] = React.useState("")
    const [showError, setShowError] = React.useState(false)
    const [loginError, setLoginError] = React.useState(false)
    const [emailError, setEmailError] = React.useState(false)
    const [firstNameError, setFirstNameError] = React.useState(false)
    const [lastNameError, setLastNameError] = React.useState(false)
    const [passwordError, setPasswordError] = React.useState(false)
    const [phoneError, setPhoneError] = React.useState(false)

    function ValidateFirstName(firstName){
        if(firstName?.length < 1 || firstName == null)
            return 0
        else
            return 1
    }
    function ValidateLastName(lastName){
        if(lastName?.length < 1 || lastName == null)
            return 0
        else
            return 1
    }
    function ValidateLogin(login){
        if(login?.length < 4 || login == null)
            return 0
        else
            return 1
    }
    function ValidatePassword(password){
        if(password?.length < 4 || password == null)
            return 0
        else
            return 1
    }
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

        setFirstNameError(false);
        setLastNameError(false);
        setLoginError(false);
        setPasswordError(false);
        setEmailError(false);
        setPhoneError(false);
        var fetchBool = true;


        if(!ValidateLogin(login)){
            setError("zbyt krótki login");
            setShowError(true);
            fetchBool = false;
            setLoginError(true);
            console.log("login error")
        }

        if(!ValidatePassword(password)){
            setError("zbyt łatwe hasło");
            setShowError(true);
            fetchBool = false;
            setPasswordError(true);
            console.log("pass error")
        }

        if(!ValidateEmail(email)){
            setError("błędny adres email");
            setShowError(true);
            fetchBool = false;
            setEmailError(true);
            console.log("mail error")
        }

        if(!ValidatePhone(phone)){
            setError("błędny numer telefonu");
            setShowError(true);
            fetchBool = false;
            setPhoneError(true);
            console.log("phone error")
        }

        if(!ValidateFirstName(firstName)){
            setError("wprowadz imie");
            setShowError(true);
            fetchBool = false;
            setFirstNameError(true);
            console.log("imie error")
        }

        if(!ValidateLastName(lastName)){
            setError("wprowadz nazwisko");
            setShowError(true);
            fetchBool = false;
            setLastNameError(true);
            console.log("nazw error")
        }

        if(fetchBool) {
            fetch(getApiUrl() + "user/login/" + login,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setLoginError(Boolean(result))
                    console.log("GET loginError:" + loginError)
                    }
                )
            })
            fetch(getApiUrl() + "user/email/" + email,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setEmailError(Boolean(result))
                    console.log("GET emailError:" + emailError)
                    }
                )
            })
            fetch(getApiUrl() + "user/phone/" + phone,{
                method: "GET"
            }).then(response => {
                response.json().then(result => {
                        setPhoneError(Boolean(result))
                    console.log("GET phoneError:" + phoneError)
                    }
                )
            })
            console.log("po wyslaniu loginError= " + loginError)
            console.log("po wyslaniu emailError= " + emailError)
            console.log("po wyslaniu phoneError= " + phoneError)

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

                    {showError &&
                        <div>{error}</div>
                    }
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