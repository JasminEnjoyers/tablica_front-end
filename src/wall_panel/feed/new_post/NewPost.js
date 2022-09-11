import React, {useEffect} from 'react';
import NewPostStyle from "./NewPostStyle";
import {Alert, Button, Input} from "@mui/material";

import CategoryOptions from "../filter/CategoryOptions";
import getApiUrl from "../../../api/ApiUrl";

export default function NewPost(props){
    const styles = NewPostStyle()
    const {user} = props
    const {post} = props

    const defaultPost = {
        id:null,
        tytul:"",
        tekst:"",
        autor:"",
        data:"",
        kategoria:"",
        obserwuje:false,
    }


    const [tytul, setTytul] = React.useState(post.tytul);
    const [tekst, setTekst] = React.useState(post.tekst)
    const [kategoria,setKategoria] = React.useState(post.kategoria);

    const [showAlert, setShowAlert] = React.useState(false);
    const [alertError, setAlertError] = React.useState(1);

    useEffect(()=>{
        setTytul(post.tytul);
        setTekst(post.tekst);
        setKategoria(post.kategoria);
    },[post])

    /*
    const [tytulError, setTytulError] = React.useState(false);
    const [tekstError, setTekstError] = React.useState(false);
    const [kategoriaError, setKategoriaError] = React.useState(false);
    const [userError, setUserError] = React.useState(false);
    */


    function ValidateLength(tytul, min, max){
        let l = tytul.length;
        return (min <= l && l < max);
    }

    function ValidateKategoria(nazwa){
        return nazwa==="" || nazwa===null || nazwa===undefined;
    }

    async function ValidateKategoriaUsed(nazwa){
        let result = true;
        await fetch(getApiUrl() + "kategorie/nazwa/" + nazwa, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function ValidateAutorUsed(login) {
        let result = true;
        await fetch(getApiUrl() + "user/login/" + login, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function SubmitButtonClicked(event){
        event.preventDefault();
        let functionTytulError = false;
        let functionTekstError = false;
        let functionUserError = false;
        let functionKategoriaError = false;

        if (!ValidateLength(tytul, 1, 255)){
            //setTytulError(true);
            functionTytulError = true;
        }

        if(!ValidateLength(tekst, 0, 1023)){
            //setTekstError(true);
            functionTekstError =true;
        }

        if(ValidateKategoria(kategoria) || !(await ValidateKategoriaUsed(kategoria))){
            //setKategoriaError(true);
            functionKategoriaError = true;
        }

        if(!(await ValidateAutorUsed(user.nazwa))){
            //setUserError(true);
            functionUserError = true;
        }

        if(!functionUserError && !functionKategoriaError && !functionTytulError && !functionTekstError) {
            if (post.id === null){
                await fetch(getApiUrl() + "posty/nowy/" + user.nazwa +
                    "/" + kategoria +
                    "/" + tytul +
                    "/" + tekst, {
                    method: "POST",
                    credentials: "include"
                }).then(response => {
                    if (response.status === 200) {
                        props.setPost(defaultPost);
                        setAlertError(0);

                        //console.log(result)
                    } else {
                        setAlertError(1);
                    }
                    setShowAlert(true);
                })
            }
            else{
                await fetch(getApiUrl() + "posty/edytuj/" + post.id +
                    "/" + user.nazwa +
                    "/" + kategoria +
                    "/" + tytul +
                    "/" + tekst, {
                    method: "PUT",
                    credentials: "include"
                }).then(response => {
                    if (response.status === 200) {
                        props.setPost(defaultPost);
                        setAlertError(0);

                        //console.log(result)
                    } else {
                        setAlertError(1);
                    }
                    setShowAlert(true);
                })
            }
        }
        if(functionKategoriaError){
            setAlertError(2);
            setShowAlert(true);
        }
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }


    function kategoriaChanged(value){
        setKategoria(value);
    }


    function renderButtons(){
        if(post.id===null){
            return(
                <div className={styles.buttonDiv}>
                    <Button className={styles.shareButton}
                            variant="contained"
                            type="submit"
                        //onClick={()=>{if(post.id!==null && kategoria!==""){props.onClick();}}}
                    >
                        Udostępnij
                    </Button>
                </div>
            );
        }
        else{
            return (
                <div>
                    <div className={styles.buttonDiv}>
                    <Button className={styles.shareButton}
                            variant="contained"
                            type="submit"
                        //onClick={()=>{if(post.id!==null && kategoria!==""){props.onClick();}}}
                    >
                        Zapisz
                    </Button>
                    </div>
                    <div className={styles.buttonDiv}>
                    <Button
                        className={styles.shareButton}
                        variant="contained"
                        onClick={()=>props.setPost(defaultPost)}>
                        Anuluj
                    </Button>
                    </div>
                </div>
            );
        }
    }

    return(
        <form className={styles.newPost} onSubmit={(event)=>SubmitButtonClicked(event)}>
            <div className={styles.newPostTop}>
                {(post.id!==null && (
                    <div className={styles.header}>
                        Edycja postu:
                    </div>
                )) || ((
                    <div className={styles.header}>
                        Nowy post:
                    </div>
                ))}
                <Input
                    className={styles.newPostTitleInput}
                    placeholder={"Wpisz tytuł"}
                    required
                    text
                    multiline
                    value={tytul}
                    onChange={(event)=>setTytul(event.target.value)}

                    inputProps={{
                        classes:{
                            maxLength: 254,
                        }
                    }}
                />
                <Input
                    className={styles.newPostInput}
                    placeholder={"podziel się czymś"}
                    required
                    value={tekst}
                    onChange={(event)=>setTekst(event.target.value)}
                    multiline

                    inputProps={{
                        classes:{
                            maxLength: 1022,
                        }
                    }}
                />
            </div>
            <div className={styles.newPostBottom}>
                <div className={styles.kategoriaDrop}>
                    <CategoryOptions
                        id="NewPostCategoryOptions"
                        kategoria={kategoria}
                        onChange={kategoriaChanged}
                        //error={kategoriaError}
                    />
                </div>
                {renderButtons()}
            </div>
            {showAlert &&
                <div className={styles.alertContainer}>
                    {alertError===0 &&
                        <Alert className={styles.alert} severity="success">
                            Pomyślnie dodano nowy post. Będzie widoczny po odświeżeniu strony.
                        </Alert>
                    }
                    {alertError===1 &&
                        <Alert className={styles.alert} severity="error">
                            Coś poszło nie tak, spróbuj ponownie później.
                        </Alert>
                    }
                    {alertError===2 &&
                        <Alert className={styles.alert} severity="warning">
                            Należy wybrać kategorię.
                        </Alert>
                    }
                </div>
            }
        </form>
    )
}