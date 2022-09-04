import React from "react";
import PostStyle from "./PostStyle";
import getApiUrl from "../../../api/ApiUrl";


export default function Post(props){
    const styles = PostStyle();

    const {post} = props;
    const {user} = props
    const autor = post.autor;
    const tytul = post.tytul;
    const tekst = post.tekst;
    const data = post.data;
    const kategoria = post.kategoria;
    const ocena = post.ocena;

    function handleReportPost(){
        fetch(getApiUrl() + "report/add?ogloszenieId="+post.id+"&uzytkownikId="+user.id, {
            method: "PUT"
        }).then(response => {})
    }

    return (
        <div className={styles.post}>
            <div className={styles.postTop}>
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
                <button>Dodaj do obserwowanych</button>
                <button onClick={handleReportPost}>Zgłoś</button>
            </div>
        </div>
    );
}