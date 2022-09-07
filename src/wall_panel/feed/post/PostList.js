import React, {useEffect} from "react";

import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import PostStyle from "./PostStyle";


export default function PostList(props){
    const styles = PostStyle();

    const {user} = props;
    const {sortujWg} = props;
    const {kategoria} = props;
    const {autor} = props;

    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(10);

    function sorted1(posty){
        return [...posty].sort((a,b) => (new Date(b.data).getTime()) - (new Date(a.data).getTime()));
    }
    function sorted2(posty){
        return [...posty].sort((a,b) => (new Date(a.data).getTime()) - (new Date(b.data).getTime()));
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
            url += "/kategoria?"
            if (kategoria !== "") {
                url += "kategoria=" + kategoria +"&";
            }
            url+= "uzytkownik=" + user.nazwa;
        }
        else{
            url += "/autor?autor=" + autor;
        }
        //console.log(url);
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                //console.log("fetch");
                //console.log(posty);
                //console.log(autor);
                setPosty(posty);
            });
    },[kategoria,autor,user.nazwa])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {((sortujWg==="Od najnowszych")?sorted1(posty):sorted2(posty))
                .slice(0,last)
                .map(post =>
                    <Post
                        user={user}
                        key={post.id}
                        post={post}/>
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
        </div>
    );
}