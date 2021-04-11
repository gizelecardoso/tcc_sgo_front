import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
    lista_items:{
        backgroundColor:"lightgray",
        borderColor:'black',
        borderWidth:1,
        width:largura*0.8,
        marginTop:10,
        height:200
    },
    submit:{
      width:200,
      height:35,
      fontSize: 20,
      fontWeight: "bold",
      textAlign:"center",
      alignContent:"center",
      color:"#fff",
      borderRadius: 5,
      backgroundColor:"green",
      marginTop: 10
  },
});

export default estilo;