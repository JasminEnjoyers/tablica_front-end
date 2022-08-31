import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button, FormControl, Input, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";



export default function NewPost(props){

    const styles = NewPostStyle()
    const {user} = props
    const [kategoria,setKategoria] = React.useState("")

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
                <Select
                    className={styles.kategoriaSelect}
                    value={kategoria}
                    displayEmpty
                    autoWidth

                    onChange={(event) => setKategoria(event.target.value)}>

                    <MenuItem value={""}>kategoria</MenuItem>
                    <MenuItem value={"motoryzacja"}>motoryzacja</MenuItem>
                    <MenuItem value={"dom i ogrod"}>dom i ogród</MenuItem>
                    <MenuItem value={"praca"}>praca</MenuItem>
                    <MenuItem value={"hobby"}>hobby</MenuItem>
                    <MenuItem value={"zwierzeta"}>zwierzęta</MenuItem>
                    <MenuItem value={"antyki"}>antyki</MenuItem>
                    <MenuItem value={"kuoki"}>kuoki</MenuItem>

                </Select>
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