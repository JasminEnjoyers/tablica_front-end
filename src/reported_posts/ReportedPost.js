import React from "react";
import PostStyle from "../wall_panel/feed/post/PostStyle";
import getApiUrl from "../api/ApiUrl";


export default function ReportedPost(props){
    const styles = PostStyle();

    const {post} = props;
    const autor = post.autor;
    const tytul = post.tytul;
    const tekst = post.tekst;
    const data = post.data;
    const kategoria = post.kategoria;
    const ocena = post.ocena;
    const osobyZglaszajace = post.osobyZglaszajace;
    const ogloszenieId = post.ogloszenieId;
    var personId = 0;

    function handleDeletePost(){
        fetch(getApiUrl() + "post/delete?ogloszenieId="+ogloszenieId, {
            method: "DELETE"
        }).then(response => {
        })
        document.getElementById(props.id).remove();
    }

    function handleLeavePost(){
        fetch(getApiUrl() + "reported/leave?ogloszenieId="+ogloszenieId, {
            method: "DELETE"
        }).then(response => {
        })
        document.getElementById(props.id).remove();
    }

    return (
        <div className={styles.post} id={props.id}>
            <div className={styles.postTop}>
                <div>
                    {osobyZglaszajace.map(person => <div key={personId++}>{person}</div>)}
                </div>
                <div className={styles.postUpperLeft}>
                    <button>+</button>
                    {ocena}
                    <button>-</button>
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
            <div className={styles.postFooter}>
                <button onClick={handleDeletePost}>Usuń post</button>
                <button onClick={handleLeavePost}>Zostaw</button>
            </div>
        </div>
    );
}