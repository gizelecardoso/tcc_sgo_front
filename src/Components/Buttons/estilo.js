import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
  adicionar: {
    width: largura * 0.2,
    width: 20,
    marginLeft: 5

  },
});

export default estilo;