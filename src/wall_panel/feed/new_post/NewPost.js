import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button} from "@mui/material";

import CategoryOptions from "../filter/CategoryOptions";
import getApiUrl from "../../../api/ApiUrl";

export default function NewPost(props){
    const styles = NewPostStyle()
    const {user} = props

    const [tytul, setTytul] = React.useState("");
    const [tekst, setTekst] = React.useState("");
    const [kategoria,setKategoria] = React.useState("");

    const [tytulError, setTytulError] = React.useState(false);
    const [tekstError, setTekstError] = React.useState(false);
    const [kategoriaError, setKategoriaError] = React.useState(false);
    const [userError, setUserError] = React.useState(false);



    function ValidateLength(tytul, min, max){
        var l = tytul.length;
        return (min <= l && l < max);
    }

    function ValidateKategoria(nazwa){
        return nazwa==="";
    }

    async function ValidateKategoriaUsed(nazwa){
        var result = true;
        await fetch(getApiUrl() + "kategorie/nazwa/" + nazwa, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function ValidateAutorUsed(login) {
        var result = true;
        await fetch(getApiUrl() + "user/login/" + login, {
            method: "GET"
        }).then((response) => response.json()).then((data) => {
            result = Boolean(data);
        })
        return result;
    }

    async function SubmitButtonClicked(event){
        event.preventDefault();
        var functionTytulError = false;
        var functionTekstError = false;
        var functionUserError = false;
        var functionKategoriaError = false;

        if (!ValidateLength(tytul, 1, 255)){
            setTytulError(true);
            functionTytulError = true;
        }

        if(!ValidateLength(tekst, 0, 1023)){
            setTekstError(true);
            functionTekstError =true;
        }

        if(ValidateKategoria(kategoria) || !ValidateKategoriaUsed(kategoria)){
            setKategoriaError(true);
            functionKategoriaError = true;
        }

        if(!ValidateAutorUsed(user.nazwa)){
            setUserError(true);
            functionUserError = true;
        }

        if(!functionUserError && !functionKategoriaError && !functionTytulError && !functionTekstError){
            fetch(getApiUrl() + "posty/nowy/" + user.nazwa +
                "/" + kategoria +
                "/" + tytul +
                "/" + tekst,{
                method: "POST",
                credentials: "include"
            }).then(response=>{
                try{
                    response.json().then(result => {
                        if(result.id!=null){console.log(result)}
                        }
                    )
                } catch (err){
                    console.log(err);
                }
            })
        }
    }


    function kategoriaChanged(value){
        //console.log("kategoriaChanged");
        //console.log(value);
        setKategoria(value);

    }

    return(
        <div className={styles.newPost}>
            <div className={styles.newPostTop}>
                <input
                    className={styles.newPostInput}
                    placeholder={"Wpisz tytuł"}
                    onChange={(event)=>setTytul(event.target.value)}
                    //value={post}
                />
                <input
                    className={styles.newPostInput}
                    placeholder={"podziel się czymś"}
                    onChange={(event)=>setTekst(event.target.value)}
                    //value={post}
                />
            </div>
            <div className={styles.newPostBottom}>
                <div className={styles.kategoriaDrop}>
                <CategoryOptions id="NewPostCategoryOptions" kategoria={kategoria} onChange={kategoriaChanged}/>
                </div>
                <div className={styles.buttonDiv}>
                <Button className={styles.shareButton}
                    variant="contained"
                    type="submit"
                    onClick={(event)=>SubmitButtonClicked(event)}>
                    Udostępnij
                    </Button>
                </div>
            </div>
        </div>
    )
}