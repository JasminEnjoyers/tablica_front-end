import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    positioningBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "grey"
    },
    loginBox: {
        padding: 50,
        WebkitBoxShadow: "0px 0px 15px 5px black",
        backgroundColor: "white",
        border: "3px solid black",
        WebkitBorderRadius: "50px"
    },
    formElement: {
        margin: 5,
    },
    register: {
        textDecoration: "none",
        color: "blue",
    },
    logo:{
        width: 125,
        height: 125,
    }
}));