import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    newPost:{
        height: "250px",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    },

    newPostInput:{
        display: "flex",
        alignItems:"center",
        justifyItems:"center",
        justifyContent:"center",
        alignContent:"center",
        border: "none",
        width: "90%",
        height:"100%",
        background:"none",
    },

    newPostTop:{
        display:"flex",
        justifyContent:"center",
        alignContent:"center",
        border: "none",
        width: "100%",
        height:"70%",
        background:"none",
    },

    newPostBottom:{
        display: "flex",
        justifyContent: "center",
        alignContent:"center",
        border: "none",
        width: "100%",
        height:"30%",
        background:"none",
    },

    buttonDiv:{
        margin:"15px",
    },

    shareButton: {
        height: "100%",
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

}));