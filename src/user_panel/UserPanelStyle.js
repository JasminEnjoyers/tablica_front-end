import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    userBackground:{
        display: "flex",
        flexDirection:"column",
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

    h3:{
        display:"flex",
        position:"fixed",
        top:0,
        left:0,

        ///// to ogarnąć trzeba

    },

    positionigBox:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',

    },

    Card:{

    },

    cardSpacing:{
        margin: theme.spacing(1),
        width:"40%",
    },
    cardContentElements:{
        display:"flex",
        flexDirection:"column",
        backdropFilter: "blur(15px)",
        backgroundColor: "rgba( 255, 255, 255, 0.3 )",
        WebkitBorderRadius: "10px",
        WebkitBoxShadow: "0px 0px 16px -8px rgba(0, 0, 0, 0.68)",
    },
}));