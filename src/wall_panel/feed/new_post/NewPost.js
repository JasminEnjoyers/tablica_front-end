import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button} from "@mui/material";

import CategoryOptions from "../filter/CategoryOptions";
import getApiUrl from "../../../api/ApiUrl";

export default function NewPost(props){

    const styles = NewPostStyle()
    const {user} = props
    const [kategoria,setKategoria] = React.useState("")


    function ValidateLength(tytul, min, max){
        var l = tytul.length;
        return (min <= l && l < max);
    }

    function ValidateKategoria(nazwa){
        return !(nazwa.equals(""));
    }

    async function ValidateKategoriaUsed(nazwa){
        var result = true;
        await fetch(getApiUrl() + "api/kategorie/nazwa/" + nazwa, {
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
                    placeholder={"podziel się czymś"}
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
                    type="submit">
                    Udostępnij
                    </Button>
                </div>
            </div>
        </div>
    )
}