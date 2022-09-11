import React from "react";
import PostStyle from "../wall_panel/feed/post/PostStyle";
import getApiUrl from "../api/ApiUrl";
import {Button, Dialog, Divider} from "@mui/material";


export default function ReportedPost(props){
    const styles = PostStyle();

    const {post} = props;
    const autor = post.autor;
    const tytul = post.tytul;
    const tekst = post.tekst;
    const data = post.data;
    const kategoria = post.kategoria;
    const osobyZglaszajace = post.osobyZglaszajace;
    const ogloszenieId = post.ogloszenieId;

    const [dialogType, setDialogType] = React.useState(0);

    var personId = 0;

    function showDialog(){
        if(dialogType===2){
            return(
                <Dialog
                    onClose={()=>setDialogType(0)}
                    open={true}>
                    Czy napewno chcesz zachować ten post i zignorować dotyczące go zgłoszenia?
                    <Button onClick={()=>handleLeavePost()}>Tak</Button>
                    <Button onClick={()=>setDialogType(0)}>Nie</Button>
                </Dialog>
            )
        }
        if(dialogType===1){
            return(
                <Dialog
                    onClose={()=>setDialogType(0)}
                    open={true}>
                    Czy napewno chcesz usunąć ten post?
                    <Button onClick={()=>handleDeletePost()}>Tak</Button>
                    <Button onClick={()=>setDialogType(0)}>Nie</Button>
                </Dialog>
            )
        }
    }

    async function handleDeletePost(){
        await fetch(getApiUrl() + "post/delete?ogloszenieId="+ogloszenieId, {
            method: "DELETE"
        }).then(response => {
        })
        document.getElementById(props.id).remove();
        setDialogType(0);
    }

    async function handleLeavePost(){
        await fetch(getApiUrl() + "reported/leave?ogloszenieId="+ogloszenieId, {
            method: "DELETE"
        }).then(response => {
        })
        document.getElementById(props.id).remove();
        setDialogType(0);
    }

    return (
        <div className={styles.post} id={props.id}>
            <div className={styles.postTop}>
                <div>
                    {osobyZglaszajace.map(person => <div key={personId++}>{person}</div>)}
                </div>

                <div className={styles.postHeader}>
                    <div className={styles.postHeaderTileL}>Autor: {autor}</div>
                    <div className={styles.postHeaderTileR}>Dodano: {data}</div>
                </div>
                <div className={styles.postHeader}>
                    <div className={styles.tytul}>{tytul}</div>
                    <div className={styles.kategoria}>{kategoria}</div>
                    <Divider className={styles.divider}></Divider>
                </div>
                <div
                    className={styles.postMain}>
                    {tekst}
                </div>
            </div>
            <div className={styles.postFooter}>
                <Button onClick={()=>setDialogType(1)}>Usuń post</Button>
                <Button onClick={()=>setDialogType(2)}>Zostaw</Button>
            </div>
            {showDialog()}
        </div>
    );
}