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
  buttonStart: {
    width:150,
    height:35,
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    padding: 7.5,
    color:"#fff",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor:"blue",
  },
  buttonStop: {
    width:150,
    height:35,
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    color:"#fff",
    padding: 7.5,
    borderRadius: 5,
    marginTop: 10,
    backgroundColor:"orange",
  },
  buttonFinish: {
    width:150,
    height:35,
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    padding: 7.5,
    color:"#fff",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor:"green",
    marginRight: 10
  },
  disabled:{
    width:150,
    height:35,
    fontSize: 20,
    fontWeight: "bold",
    textAlign:"center",
    padding: 7.5,
    color:"#fff",
    borderRadius: 5,
    marginTop: 10,
    backgroundColor:"#ccc",
  }
});

export default estilo;