import React from "react";
import PostStyle from "./PostStyle";
import getApiUrl from "../../../api/ApiUrl";
import {Button, Dialog, Divider} from "@mui/material";
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
    const [obserwuje, setObserwuje] = React.useState(post.obserwuje);


    function handleDeleteClicked(){
        setDialogType(2);
    }

    async function handleDelete(){
        await fetch(getApiUrl() + "post/delete?ogloszenieId="+ post.id, {
            method: "DELETE"
        }).then(response => {
        })
        setDialogType(0);
    }

    function handleEditClicked(){
        props.setPost(post);
        window.scroll(0,0);
        //setDialogType(1);
    }

    function handleFollowClicked(){
        setObserwuje(true);
        fetch(getApiUrl() + "followed/add?userId="+user.id+"&postId="+post.id, {
            method: "PUT"
        }).then(response => {})
    }

    function handleUnfollowClicked(){
        setObserwuje(false);
        fetch(getApiUrl() + "followed/delete?userId="+user.id+"&postId="+post.id, {
            method: "DELETE"
        }).then(response => {})
    }

    function handleReportClicked(){
        setDialogType(3);
    }

    async function reportPost(){
        await fetch(getApiUrl() + "report/add?ogloszenieId="+post.id+"&uzytkownikId="+user.id, {
            method: "PUT"
        }).then(response => {})
        setDialogType(0);
    }

    const showDialog = () =>{
        if(dialogType===3){
                return(
                    <Dialog onClose={()=>setDialogType(0)}
                        open={true}>
                        Czy na pewno chcesz zgłosić ten post?
                        <Button onClick={()=>reportPost()}>Tak</Button>
                        <Button onClick={()=>setDialogType(0)}>Nie</Button>
                    </Dialog>
                )
            }
        if(dialogType===2){
            return(
                    <Dialog onClose={()=>setDialogType(0)}
                        open={true}>
                        Czy na pewno chcesz usunąć ten post?
                        <Button onClick={()=>handleDelete(post.id)}>Tak</Button>
                        <Button onClick={()=>setDialogType(0)}>Nie</Button>
                    </Dialog>
            )
        }

        /*if (dialogType===1){
            return(
                    <Dialog onClose={()=>setDialogType(0)}
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
                        <div className={styles.break}></div>
                        <Button onClick={()=>setDialogType(0)}>Anuluj</Button>
                    </Dialog>
            )
        }*/
    }

    function viewingType(){
        if(autor===user.nazwa) return 1;
        if(obserwuje) return 2;
        return 0;
    }

    const PostFooter = () =>{
        var view = viewingType();
        if (view === 0)
            return(
                <div
                    className={styles.postFooter}>
                    <Button onClick={()=>handleFollowClicked()}>Dodaj do obserwowanych</Button>
                    <Button onClick={()=>handleReportClicked()}>Zgłoś</Button>
                </div>
            )
        if (view === 1)
            return (
                <div
                    className={styles.postFooter}>
                    <Button onClick={(event)=>handleEditClicked()}>Edytuj</Button>
                    <Button onClick={(event)=>handleDeleteClicked()}>Usuń</Button>
                </div>
            )
        if (view === 2)
            return(
                <div
                    className={styles.postFooter}>
                    <Button onClick={()=>handleUnfollowClicked()}>Usuń z obserwowanych</Button>
                    <Button onClick={()=>handleReportClicked()}>Zgłoś</Button>
                </div>
            )
    }

    return (
        <div className={styles.post}>
            <div className={styles.postTop}>
                <div className={styles.postHeader}>
                    <div className={styles.postHeaderTileL}>Autor: {autor}</div>
                    <div className={styles.postHeaderTileR}>Dodano: {data}</div>

                </div>
                <div className={styles.postHeader}>
                    <div className={styles.tytul}>{tytul}</div>
                    <div className={styles.kategoria}>{kategoria}</div>
                    <Divider className={styles.divider}></Divider>
                </div>
                <div className={styles.postMain}>{tekst}</div>
            </div>
            {PostFooter()}
            {showDialog()}
        </div>
    );
}