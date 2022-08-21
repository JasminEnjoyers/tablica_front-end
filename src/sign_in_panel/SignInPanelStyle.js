import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    logInBackground:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: "url(/img/backdrop.png)",
        backgroundSize: "cover"
    },

    positioningBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
    },

    loginBox: {
        padding: 50,
        WebkitBoxShadow: "18px 18px 30px 15px rgba(207, 207, 207,0.2)",
        backgroundColor: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(2px)",
        backgroundBlendMode: "hue",
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
        margin: 10,
    },

    register: {
        textDecoration: "none",
        color: "blue",
    },

    button: {
        marginTop: 20,
    },

    logo:{
        width: 125,
        height: 125,
    }
}));