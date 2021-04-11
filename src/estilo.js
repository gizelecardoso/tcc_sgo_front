import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    submit:{
        width:largura*0.8,
        height:40,
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        color:"#fff",
        borderRadius: 10,
        backgroundColor:"green",
        marginBottom: 10,
        marginTop: 10
    },
});

export default estilo;