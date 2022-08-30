import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    postList:{
        width: "100%",
        height: "95%",
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: "rgb(161,172,173)",
        //backdropFilter: "blur(2px)",
        //WebkitBorderRadius: "10px",
    },

    post:{
        backgroundColor: "rgb(205,0,255)",


        width: "100%",
        alignSelf: "center",

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

    postHeaderTile:{
        display: "inline-block",
        backgroundColor: "rgb(255,255,0)",

        width: "50%"
    },

    postMain:{
        display: "block",
        backgroundColor: "rgb(255,255,255)",

        width: "100%",
    },

    postFooter:{
        display: "block",
        backgroundColor: "rgb(255,0,0)",
        width: "100%",
        height: "15%",
    },
}));