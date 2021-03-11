import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
    search_input:{
        width:largura*0.6,
        marginLeft:10
    }
});

export default estilo;