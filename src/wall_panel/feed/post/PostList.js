import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import PostStyle from "./PostStyle";

export default function PostList(props){
    const styles = PostStyle();
    const {sortujWg} = props;
    const {kategoria} = props;

    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(5);


    function dataSorted(posty){
        return [...posty].sort((a,b) => (new Date(b.data).getTime()) - (new Date(a.data).getTime()));
    }
    function sorted(posty){
        return [...posty].sort((a,b) => b[sortujWg]-a[sortujWg]);
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLast(last+5);
        }
    };

    useEffect(()=>{
        let url = getApiUrl() + "api/posty/posty";
        if(kategoria!==""){
            url = url + "?kategoria=" + kategoria;
        }
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                console.log("fetch");
                console.log(posty);
                setPosty(posty);
            });
    },[kategoria])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {((kategoria==="DataDodania")? dataSorted(posty): sorted(posty)).slice(0,last).map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
}