import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    postList:{
        width: "100%",
        height: "95%",

        //backgroundColor: "rgb(161,172,173)",
        //backdropFilter: "blur(2px)",
        //WebkitBorderRadius: "10px",
    },

    post:{
        backgroundColor: "rgb(205,0,255)",

        width: "100%",
        backdropFilter: "blur(2px)",
        WebkitBorderRadius: "10px",
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