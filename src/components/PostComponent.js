import React from "react";

export default function PostComponent(props){
    const {post}=props
    const tytul=post.tytul;
    const tekst=post.tekst;

    return (
        <div>
            <p>====================================</p>
            {tytul}<br/>
            {tekst}<br/>

        </div>
    );
}