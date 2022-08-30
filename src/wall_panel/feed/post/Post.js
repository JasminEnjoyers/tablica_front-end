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


    async function fetchAutor(){
        let url = getApiUrl() + 'api/uzytkownicy/uzytkownik?id='+idAutora;

        await fetch(url,{method:"GET"})
            .then(response=>response.json())
            .then(user => document.getElementById("postAuthor").innerHTML = user.nazwa)
    }

    async function fetchKategoria(){
        let url = getApiUrl() + 'api/kategorie/kategoria?id='+idKategorii;

        await fetch(url,{method:"GET"})
            .then(response=>response.json())
            .then(category => document.getElementById("postKategoria").innerHTML = category.nazwa)
    }

    return (
        <div className={styles.post}>
            <div className={styles.postUpper}>
                <div className={styles.postUpperLeft}>{ocena}</div>
                <div className={styles.postUpperRight}>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTile} id={"postAuthor"} onLoad={fetchAutor()}></div>
                        <div className={styles.postHeaderTile}>{data}</div>

                    </div>
                    <div className={styles.postHeader}>
                        <div className={styles.postHeaderTile}>{tytul}</div>
                        <div className={styles.postHeaderTile}id={"postKategoria"} onLoad={fetchKategoria()}></div>
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