import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    postList:{
        width: "100%",
        height: "95%",
    },

    post:{
        height: "auto",
        width: "100%",
        backgroundColor: "rgb(255,255,255)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        padding:5,
        boxSizing:"border-box",
        marginBottom:20,
    },

    postUpper:{
        display: "block",
        backgroundColor: "rgba(255,255,255,0)",


        width: "100%",
        height: "85%",
    },

    postUpperLeft:{
        backgroundColor: "rgba(255,255,255,0)",

        display: "inline-block",
        
        width: "20%",
        height: "100%",
    },

    postUpperRight:{
        backgroundColor: "rgba(255,255,255,0)",
        display: "inline-block",
        width: "80%",
        height: "100%",
    },

    postHeader:{
        float: "left",
        backgroundColor: "rgba(255,255,255,0)",

        width: "100%",
    },

    postHeaderTileL:{
        display: "inline-block",
        textAlign:"left",
        backgroundColor: "rgba(255,255,255,0)",

        width: "50%"
    },

    postHeaderTileR:{
        display: "inline-block",
        textAlign:"right",
        backgroundColor: "rgba(255,255,255,0)",

        width: "50%",
    },

    tytul:{
        display: "inline-block",
        textAlign:"left",
        backgroundColor: "rgba(255,255,255,0)",
        width: "50%",
        fontSize:20,
    },

    kategoria:{
        display: "inline-block",
        textAlign:"right",
        backgroundColor: "rgba(255,255,255,0)",
        width: "50%",
        fontSize:20,

    },

    postMain:{
        display: "block",
        textAlign: "justify",
        backgroundColor: "rgba(255,255,255,0)",
        height:"auto",
        width: "100%",
    },

    postFooter:{
        display: "block",
        textAlign: "right",
        backgroundColor: "rgba(255,255,255,0)",
        width: "100%",
        height: "15%",
    },

    dialogBackground:{
        position: "fixed",
        top: "-100vh",
        left: "-100vw",
        background: "rgba(255,255,255,0.51)",
        height: "200%",
        width: "200vw",
    },

    divider:{
        padding:5,
    },

    dialog:{

    }
}));