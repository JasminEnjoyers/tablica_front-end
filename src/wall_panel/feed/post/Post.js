import React from "react";
import PostStyle from "./PostStyle";
import getApiUrl from "../../../api/ApiUrl";
import {Dialog} from "@mui/material";
import NewPost from "../new_post/NewPost";


export default function Post(props){
    const styles = PostStyle();

    const [dialogType, setDialogType] = React.useState(0);

    const {user} = props;
    const {post} = props;

    const autor = post.autor;
    const tytul = post.tytul;
    const tekst = post.tekst;
    const data = post.data;
    const kategoria = post.kategoria;
    const ocena = post.ocena;


    function handleDeleteClicked(){
        setDialogType(2);
    }

    function handleDelete(){
        fetch(getApiUrl() + "post/delete?ogloszenieId="+ post.id, {
            method: "DELETE"
        }).then(response => {
        })
        setDialogType(0);
    }

    function handleEditClicked(){
        setDialogType(1);
    }

    function handleFollowClicked(){
        fetch(getApiUrl() + "followed/add?userId="+user.id+"&postId="+post.id, {
            method: "PUT"
        }).then(response => {})
    }

    function handleUnfollowClicked(){

    }

    function handleReportClicked(){
        setDialogType(3);
    }

    function reportPost(){
        fetch(getApiUrl() + "report/add?ogloszenieId="+post.id+"&uzytkownikId="+user.id, {
            method: "PUT"
        }).then(response => {})
        setDialogType(0);
    }

    const showDialog = () =>{
        if(dialogType===3){
                return(
                    <Dialog
                        open={true}>
                        Czy na pewno chcesz zgłosić ten post?
                        <button onClick={()=>reportPost()}>Tak</button>
                        <button onClick={()=>setDialogType(0)}>Nie</button>
                    </Dialog>
                )
            }
        if(dialogType===2){
            return(
                    <Dialog
                        open={true}>
                        Czy na pewno chcesz usunąć ten post?
                        <button onClick={()=>handleDelete(post.id)}>Tak</button>
                        <button onClick={()=>setDialogType(0)}>Nie</button>
                    </Dialog>
            )
        }

        if (dialogType===1){
            return(
                    <Dialog
                        open={true}>
                        Edycja postu
                        <NewPost
                            onClick={()=>{
                                setTimeout(() => {
                                    setDialogType(0);
                                }, 2000);
                            }}
                            user = {user}
                            post = {post}>
                        </NewPost>
                        <button onClick={()=>setDialogType(0)}>Anuluj</button>
                    </Dialog>
            )
        }
    }

    function viewingType(){
        if(autor===user.nazwa) return 1;
        return 0;
    }

    const PostFooter = () =>{
        var view = viewingType();
        if (view === 0)
            return(
                <div
                    className={styles.postFooter}>
                    <button onClick={()=>handleFollowClicked()}>Dodaj do obserwowanych</button>
                    <button onClick={()=>handleReportClicked()}>Zgłoś</button>
                </div>
            )
        if (view === 1)
            return (
                <div
                    className={styles.postFooter}>
                    <button onClick={(event)=>handleEditClicked()}>Edytuj</button>
                    <button onClick={(event)=>handleDeleteClicked()}>Usuń</button>
                </div>
            )
        if (view === 2)
            return(
                <div
                    className={styles.postFooter}>
                    <button onClick={()=>handleUnfollowClicked()}>Usuń z obserwowanych</button>
                    <button onClick={()=>handleReportClicked()}>Zgłoś>Zgłoś</button>
                </div>
            )
    }

    return (
        <div className={styles.post}>
            <div className={styles.postTop}>
                <div className={styles.postUpperLeft}>
                    {ocena}
                </div>
                <div className={styles.postUpperRight}>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTileL}>{autor}</div>
                        <div className={styles.postHeaderTileR}>{data}</div>

                    </div>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTileL}>{tytul}</div>
                        <div className={styles.postHeaderTileR}>{kategoria}</div>
                    </div>
                    <div className={styles.postMain}>{tekst}</div>
                </div>


            </div>
            {PostFooter()}
            {showDialog()}
        </div>
    );
}