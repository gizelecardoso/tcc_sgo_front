import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({

    linha_lista:{
        flexDirection: 'row',
        alignItems:'center'
    }
});

export default estilo;