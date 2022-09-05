import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    wallBackground:{
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
        backgroundColor: "rgba(250, 241, 255, 1)",
        backgroundImage: "linear-gradient(150deg, rgba(250, 241, 255, 1) 10%, rgba(82, 129, 208, 1) 90%)",
    },

    newPostContainer:{
        display:"flex",
        marginBottom:30,
        marginTop:30,
    },

    feedContainer:{
        display:"flex",
        marginBottom:30,
        marginTop:50,
    },

    logo:{
        display: "flex",
        width: 125,
        height: 125,
    },
}));