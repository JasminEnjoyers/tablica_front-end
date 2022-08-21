import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    positioningBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#e1e3eb"
    },
    loginBox: {

        padding: 50,
        WebkitBoxShadow: "11px 12px 13px 12px rgb(207, 207, 207)",
        backgroundColor: "white",
        //border: "3px solid black",
        WebkitBorderRadius: "50px"
    },
    formElement: {
        margin: 5,

    },
    TextField:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    },
    registerTextBox:{
        margin: 5,
    },
    register: {
        textDecoration: "none",
        color: "blue",
    },
    button:{
        marginTop:25,
    },
    logo:{
        width: 125,
        height: 125,
    }
}));