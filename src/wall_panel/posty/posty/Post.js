import React from "react";

export default function Post(props){
    const {post}=props
    const idAutora=post.id_autora;
    const tytul=post.tytul;
    const tekst=post.tekst;
    const data=post.data;


    return (
        <div>
            <p>====================================</p>
            {idAutora} {tytul} {data}<br/>
            {tekst}<br/>


        </div>
    );
}