import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    feed: {
        width: 500,
        //height: "90vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(161,172,173)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
    },

    filter:{
        display: 'inline-block',
        width: 250,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgb(161,172,173)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
    },

}));