import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    body:{
        backgroundColor: "grey",
        height:"100vh"
    },
    positionigBox:{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardSpacing:{
        margin: theme.spacing(1)
    },
    cardContentElements:{
        display:"flex",
        flexDirection:"column",
    },
}));