import React from 'react';
import NewPostStyle from "./NewPostStyle";
import {Button, Input, TextField} from "@mui/material";
import getApiUrl from "../api/ApiUrl";

export default function NewPost(props){

    const styles = NewPostStyle()
    const {user} = props

    return(
        <div className={styles.newPost}>
            <div className={styles.newPostTop}>
                <Input
                    className={styles.newPostInput}
                    placeholder={"podziel się czymś"}
                    multiline
                    maxRows={4}
                    //value={post}
                />
            </div>
            <div className={styles.newPostBottom}>
                <Button className={styles.shareButton}
                    variant="contained"
                    type="submit">
                    Udostępnij
                    </Button>
            </div>
        </div>
    )
}