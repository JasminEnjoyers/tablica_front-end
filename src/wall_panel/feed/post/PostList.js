import React, {useEffect} from "react";

import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import PostStyle from "./PostStyle";
import {Dialog} from "@mui/material";
import NewPost from "../new_post/NewPost";

export default function PostList(props){
    const styles = PostStyle();

    const {user} = props;
    const {sortujWg} = props;
    const {kategoria} = props;
    const {autor} = props;

    const [dialogType, setDialogType] = React.useState(0);
    const [editing, setEditing] = React.useState({});

    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(10);


    function dataSorted(posty){
        return [...posty].sort((a,b) => (new Date(b.data).getTime()) - (new Date(a.data).getTime()));
    }
    function sorted(posty){
        return [...posty].sort((a,b) => b[sortujWg]-a[sortujWg]);
    }




    function handleDeleteClicked(post){
        setEditing(post);
        setDialogType(2);
    }

    function handleDelete(post){

    }

    function handleEditClicked(post){
        setEditing(post);
        setDialogType(1);
    }

    function handleEdit(post){
        
    }

    function handleFollowClicked(post){}

    function handleUnfollowClicked(post){}

    function handleReportClicked(post){
        fetch(getApiUrl() + "report/add?ogloszenieId="+post.id+"&uzytkownikId="+user.id, {
            method: "PUT"
        }).then(response => {})
    }

    const showDialog = () =>{
        if(dialogType===2){
            return(
                <Dialog
                    open={true}
                >
                    Czy na pewno chcesz usunąć ten post?
                    <button onClick={()=>handleDelete(editing)}>Tak</button>
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
                        user={user}>

                    </NewPost>
                    <button onClick={()=>handleEdit(editing)}>Zatwierdź</button>
                    <button onClick={()=>setDialogType(0)}>Anuluj</button>
                </Dialog>
            )
        }
        else
            return
    }

    function viewingType(post){
        if(post.autor===user.nazwa) return 1;
        return 0;
    }

    const PostFooter = (post) =>{
        var view = viewingType(post);
        if (view === 0)
            return(
                <div
                    className={styles.postFooter}>
                    <button post={post} onClick={()=>handleFollowClicked(post)}>Dodaj do obserwowanych</button>
                    <button post={post} onClick={()=>handleReportClicked(post)}>Zgłoś</button>
                </div>
            )
        if (view === 1)
            return (
                <div
                    className={styles.postFooter}>
                    <button post={post} onClick={(event)=>handleEditClicked(post)}>Edytuj</button>
                    <button post={post} onClick={(event)=>handleDeleteClicked(post)}>Usuń</button>
                </div>
            )
        if (view === 2)
            return(
                <div
                    className={styles.postFooter}>
                    <button post={post} onClick={()=>handleUnfollowClicked}>Usuń z obserwowanych</button>
                    <button post={post} onClick={()=>handleReportClicked(post)}>Zgłoś>Zgłoś</button>
                </div>
            )
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY + 1) >= document.body.offsetHeight) {
            setLast(last+5);
        }
    };

    useEffect(()=>{
        let url = getApiUrl() + "posty";
        //console.log(autor);
        //console.log(kategoria);
        if(autor!==user.nazwa) {
            url = url + "/kategoria"
            if (kategoria !== "") {
                url = url + "?kategoria=" + kategoria;
            }
        }
        else{
            url = url + "/autor?autor=" + autor;
        }
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                //console.log("fetch");
                //console.log(posty);
                //console.log(autor);
                setPosty(posty);
            });
    },[kategoria,autor])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {((sortujWg==="dataDodania")?dataSorted(posty):sorted(posty))
                .slice(0,last)
                .map(post =>
                    <Post
                        key={post.id}
                        post={post}
                        footer={PostFooter(post)}/>
                )
            }

            {(last > posty.length)?(
                <div>
                    To już wszystkie posty, przyjdź ponownie póżniej.
                </div>
            ):(
                <div>
                    Trwa wczytywanie...
                </div>
            )}

            {showDialog()}
        </div>
    );
}