import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    newPost:{
        minHeight: "40vh",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    },

    newPostTitleInput:{
        display: "flex",
        alignItems:"center",
        justifyItems:"center",
        justifyContent:"center",
        alignContent:"center",
        border: "none",
        width: "90%",
        height:"20%",
        background:"none",
    },

    newPostInput:{
        display: "flex",
        alignItems:"center",
        justifyItems:"center",
        justifyContent:"center",
        alignContent:"center",
        border: "none",
        width: "90%",
        minHeight:"15vh",
        background:"none",
    },

    newPostTop:{
        display:"flex",
        flexFlow: "row wrap",
        justifyContent:"center",
        alignContent:"center",
        border: "none",
        width: "100%",
        minHeight:"30vh",
        background:"none",
    },

    newPostBottom:{
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        border: "none",
        width: "100%",
        height:"10vh",
        background:"none",
    },

    buttonDiv:{
        margin:"15px",
        display:"inline-block",
    },

    shareButton: {
        height: "100%",
        display:"inline-block",
        backgroundColor: "green",
        border: "none",
        WebkitBorderRadius: "4px",
    },

    kategoriaDrop:{
        display:"flex",
        margin:"15px",

        justifyContent:"center",
        alignContent:"center",
    },

    kategoriaSelect:{
        justifyContent:"center",
        alignContent:"center",
    },

    alertContainer:{
        display:"flex",
        width:"100%",
        height:"10vh",
    },

    alert:{
        display:"flex",
        width:"100%",
        height:"8vh",
    },
}));