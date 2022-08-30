import React, {useEffect} from "react";
import getApiUrl from "../api/ApiUrl";
import PostComponent from "./PostComponent";
import {renderToString} from "react-dom/server";

export default function PostListComponent(props){
    const [posty, setPosty] = React.useState([]);
    const {sortujWg} = props;
    const {kategoria} = props;

    const dataSorted = [...posty].sort((a,b) => (new Date(a.data).getTime()) - (new Date(b.data).getTime()));
    const sorted = [...posty].sort((a,b) => b[sortujWg]-a[sortujWg]);

    function fetchPosty(){
        let url = getApiUrl() + "api/posty/posty";
        if(kategoria!==""){
            url = url + "?kategoria=" + kategoria;
        }
         fetch(url, {method:"POST",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                document.getElementById("pojemnikNaPosty").innerHTML = "";
                posty.forEach((post) => document.getElementById("pojemnikNaPosty").innerHTML += renderToString(<PostComponent key={post.id} post={post}/>))
            });
    }

    return(
        <div id="pojemnikNaPosty" onLoad={fetchPosty()}>
        </div>
    )

}