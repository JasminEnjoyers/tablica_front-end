import React, {useEffect} from "react";
import getApiUrl from "../api/ApiUrl";
import PostComponent from "./PostComponent";

export default function PostListComponent(props){
    const [posty, setPosty] = React.useState([]);

    function fetchPosty(url){
         fetch(url, {method:"POST",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                setPosty(posty);
            });
    }

    useEffect(()=>{
        const {kategoria} = props;
        let url = getApiUrl() + "api/posty/posty";
        if(kategoria!==""){
            url = url + "?kategoria=" + kategoria;
        }
        fetchPosty(url);
    },[props]);

    return(
        <div>
            {posty.map(post => <PostComponent key = {post.id} post={post}/>)}
        </div>
    )

}