import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    controls:{
        display:"flex",
        height:"45px",
        marginBottom:50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    },

    feed: {
        width: 500,
        minHeight: "10vh",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        //backgroundColor: "rgb(161,172,173)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
    },

    filter:{
        display: 'inline-block',
        width: 250,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    feedSection:{
      paddingTop:"50px",
    },

}));