import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button, FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {renderToString} from "react-dom/server";

import CategoryOptions from "../filter/CategoryOptions";

export default function NewPost(props){

    const styles = NewPostStyle()
    const {user} = props
    const [kategoria,setKategoria] = React.useState("")
    const {kategorie} = props;

    function renderKategorie() {
        if (kategorie !== null){
            document.getElementById("menuKategorii").innerHTML ="";
            kategorie.forEach(kategoria => document.getElementById("menuKategorii").innerHTML += renderToString(<option component="MenuItem" id={kategoria.id} value={kategoria.nazwa}>{kategoria.nazwa}</option>));
        }
    }

    function kategoriaChanged(event){
        setKategoria(event.target.value);
    }

    return(
        <div className={styles.newPost}>
            <div className={styles.newPostTop}>
                <input
                    className={styles.newPostInput}
                    placeholder={"podziel się czymś"}
                    multiline
                    maxRows={4}
                    //value={post}
                />
            </div>
            <div className={styles.newPostBottom}>
                <div className={styles.kategoriaDrop}>
                <CategoryOptions onChange={event=>kategoriaChanged(event)}/>
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