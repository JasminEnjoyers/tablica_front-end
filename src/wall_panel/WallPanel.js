import React, {useEffect} from 'react';
import WallPanelStyle from ".//WallPanelStyle";
import NewPost from "./feed/new_post/NewPost";
import Sidebar from "../sidebar/Sidebar";
import Feed from "./feed/Feed";
import getApiUrl from "../api/ApiUrl";



export default function WallPanel(props) {
    const styles = WallPanelStyle()
    const {user} = props
    const [kategorie,setKategorie] = React.useState(null)

    function fetchKategorie(){
        fetch(getApiUrl() + "api/kategorie/kategorie")
            .then(response => response.json())
            .then(kategorie => {
                setKategorie(kategorie);
            });
    }

    useEffect(()=> {
        fetchKategorie()
    },[]);

    return (
        <div className={styles.wallBackground}>
            <Sidebar/>

            <div>
                <div className={styles.newPostContainer}>
                    <NewPost kategorie={kategorie}/>
                </div>

                <div className={styles.feedContainer}>
                    {//<Feed kategorie={kategorie}/>
                        }
                </div>
            </div>
        </div>
    );
}