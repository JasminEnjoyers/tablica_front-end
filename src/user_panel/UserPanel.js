import React from 'react';
import getApiUrl from "../api/ApiUrl";
import Sidebar from "../sidebar/Sidebar";




export default function UserPanel(props) {
    const {user} = props
    const [menuIsOpen, setMenuIsOpen] = React.useState(false);
    const [posty,setPosty] = React.useState(null)

    function menuButtonClick(event){
        if(menuIsOpen) setMenuIsOpen(false)
        else setMenuIsOpen(true);
        console.log(menuIsOpen);
    }



    return (
        <div>
            <Sidebar/>
            {user.id}
        </div>
    );
}