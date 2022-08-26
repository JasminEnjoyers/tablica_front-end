import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
    newPost:{
        height: "200px",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    },

    newPostInput:{
        display: "flex",
        justifyContent:"start",
        border: "none",
        width: "90%",
        height:"100%",
        background:"none",
    },

    newPostTop:{
        border: "none",
        width: "100%",
        height:"70%",
        background:"none",
    },

    newPostBottom:{
        display: "flex",
        justifyContent: "center",

        // naprawić to żeby się środkowało

        border: "none",
        width: "100%",
        height:"30%",
        background:"none",
    },

    shareButton: {

        // żeby to kurna działało

        height: "70%",
        marginTop:"50",
        padding: 50,
        backgroundColor: "green",
        border: "none",
        WebkitBorderRadius: "4px",
    },
}));