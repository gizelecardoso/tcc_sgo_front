import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    header: {
        flexDirection: 'row',
        marginTop:20,
        alignItems:"center"
    },
    title: {
       fontSize: 30
    },
    subTitle:{
        fontSize: 50,
        color: "green",
        width:largura*0.6,
        textAlign:"center"
    }
});

export default estilo;