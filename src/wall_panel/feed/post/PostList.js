import React, {useEffect} from "react";
import getApiUrl from "../../../api/ApiUrl";
import Post from "./Post";
import PostStyle from "./PostStyle";

export default function PostList(props){
    const styles = PostStyle();

    const {sortujWg} = props;
    const {kategoria} = props;
    const {autor} = props;

    const [posty, setPosty] = React.useState([]);
    const [last, setLast] = React.useState(10);


    function dataSorted(posty){
        return [...posty].sort((a,b) => (new Date(b.data).getTime()) - (new Date(a.data).getTime()));
    }
    function sorted(posty){
        return [...posty].sort((a,b) => b[sortujWg]-a[sortujWg]);
    }


    const viewingType = () => {
        if(autor!=="") return 1;
        return 0;
    }

    const PostFooter = (post) =>{
        var view = viewingType();
        if (view === 0)
            return(
                <div
                    className={styles.postFooter}
                    post={post}>
                    <button>Dodaj do obserwowanych</button>
                    <button>Zgłoś</button>
                </div>
            )
        if (view === 1)
            return (
                <div
                    className={styles.postFooter}
                    post={post}>
                    <button>Edytuj</button>
                    <button>Usuń</button>
                </div>
            )
        if (view === 2)
            return(
                <div
                    className={styles.postFooter}
                    post={post}>
                    <button>Usuń z obserwowanych</button>
                    <button>Zgłoś</button>
                </div>
            )
    }

    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setLast(last+5);
        }
    };

    useEffect(()=>{
        let url = getApiUrl() + "posty";
        //console.log(autor);
        //console.log(kategoria);
        if(autor ==="") {
            url = url + "/kategoria"
            if (kategoria !== "") {
                url = url + "?kategoria=" + kategoria;
            }
        }
        else{
            url = url + "/autor?autor=" + autor;
        }
        fetch(url, {method:"GET",credentials:"include"})
            .then(response => response.json())
            .then(posty => {
                //console.log("fetch");
                //console.log(posty);
                //console.log(autor);
                setPosty(posty);
            });
    },[kategoria,autor])

    return(
        <div className={styles.postList} id={"postListContainer"}>
            {((sortujWg==="dataDodania")?dataSorted(posty):sorted(posty))
                .slice(0,last)
                .map(post =>
                    <Post
                        viewingType={viewingType}
                        key={post.id}
                        post={post}
                        footer={PostFooter(post)}/>
                )
            }
        </div>
    );
}