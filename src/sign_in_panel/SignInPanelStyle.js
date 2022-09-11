import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    logInBackground:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundPosition:"center",
        backgroundAttachment:"fixed",
        minHeight:"100vh",
        top:0,
        left:0,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(98, 87, 255, 1)",
        backgroundImage: "linear-gradient(290deg, rgba(98, 87, 255, 1) 10%, rgba(160, 121, 206, 1) 90%)",
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
        WebkitBorderRadius: "50px",
        maxWidth: 500
    },

    formElement: {
        margin: 5,
        //backgroundColor: "rgba(255,255,255,0.1)"

        //zmienić jebitny biały za tekstem
    },

    TextField:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
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