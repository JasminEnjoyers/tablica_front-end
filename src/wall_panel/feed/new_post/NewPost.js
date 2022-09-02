import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button} from "@mui/material";

import CategoryOptions from "../filter/CategoryOptions";

export default function NewPost(props){

    const styles = NewPostStyle()
    const [kategoria,setKategoria] = React.useState("")


    function kategoriaChanged(value){
        setKategoria(value);

    }

    return(
        <div className={styles.newPost}>
            <div className={styles.newPostTop}>
                <input
                    className={styles.newPostInput}
                    placeholder={"podziel się czymś"}
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