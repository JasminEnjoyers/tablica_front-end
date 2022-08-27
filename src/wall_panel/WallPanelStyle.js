import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    wallBackground:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: "cover",
        backgroundColor: "rgba(250, 241, 255, 1)",
        backgroundImage: "linear-gradient(150deg, rgba(250, 241, 255, 1) 10%, rgba(82, 129, 208, 1) 90%)",
    },

    logo:{
        display: "flex",
        width: 125,
        height: 125,
    },

    feed: {
        display: "flex",
        width: 500,
        height: "100vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

    }


}));