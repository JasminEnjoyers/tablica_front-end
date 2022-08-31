import React from "react";
import PostStyle from "./PostStyle";
import getApiUrl from "../../../api/ApiUrl";


export default function Post(props){
    const styles = PostStyle();

    const {post} = props;
    const idAutora =post.id_autora;
    const tytul = post.tytul;
    const tekst = post.tekst;
    const data = post.data;
    const idKategorii = post.id_kategorii;
    const ocena = post.ocena;


    function fetchAutor(){
        let url = getApiUrl() + 'api/uzytkownicy/uzytkownik?id='+idAutora;

        fetch(url,{method:"GET"})
            .then(response=>response.json())
            .then(user => document.getElementById("postAuthor"+post.id).innerHTML = user.nazwa)
    }

    function fetchKategoria(){
        let url = getApiUrl() + 'api/kategorie/kategoria?id='+idKategorii;

        fetch(url,{method:"GET"})
            .then(response=>response.json())
            .then(category => document.getElementById("postKategoria"+post.id).innerHTML = category.nazwa)
    }

    return (
        <div className={styles.post}>
            <div className={styles.postUpper}>
                <div className={styles.postUpperLeft}>{ocena}</div>
                <div className={styles.postUpperRight}>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTileL} id={"postAuthor"+post.id} onLoad={fetchAutor()}></div>
                        <div className={styles.postHeaderTileR}>{data}</div>

                    </div>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTileL}>{tytul}</div>
                        <div className={styles.postHeaderTileR}id={"postKategoria"+post.id} onLoad={fetchKategoria()}></div>
                    </div>
                    <div className={styles.postMain}>{tekst}</div>
                </div>


            </div>
            <div className={styles.postFooter}>
                <a href='https://jbzd.com.pl'>report</a>
            </div>
        </div>
    );
}