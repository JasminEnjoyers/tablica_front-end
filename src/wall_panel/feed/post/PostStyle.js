import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    postList:{
        width: "100%",
        height: "95%",
    },

    post:{
        height: "auto",
        width: "100%",
        backgroundColor: "rgba(255,255,255,0.8)",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
        padding:5,
        boxSizing:"border-box",
        marginBottom:20,
    },

    postUpper:{
        display: "block",
        backgroundColor: "rgb(0,108,255)",


        width: "100%",
        height: "85%",
    },

    postUpperLeft:{
        backgroundColor: "rgb(66,255,0)",

        display: "inline-block",
        
        width: "20%",
        height: "100%",
    },

    postUpperRight:{
        backgroundColor: "rgb(196,0,255)",
        display: "inline-block",
        width: "80%",
        height: "100%",
    },

    postHeader:{
        float: "left",
        backgroundColor: "rgb(255,128,0)",

        width: "100%",
    },

    postHeaderTileL:{
        display: "inline-block",
        textAlign:"left",
        backgroundColor: "rgb(255,255,0)",

        width: "50%"
    },

    postHeaderTileR:{
        display: "inline-block",
        textAlign:"right",
        backgroundColor: "rgb(255,255,0)",

        width: "50%"
    },

    postMain:{
        display: "block",
        textAlign: "justify",
        backgroundColor: "rgb(255,255,255)",
        height:"auto",
        width: "100%",
    },

    postFooter:{
        display: "block",
        textAlign: "right",
        backgroundColor: "rgb(255,0,0)",
        width: "100%",
        height: "15%",
    },
}));