import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
  mainBox:{
    width:largura*0.8,
    borderRadius: 10,
    height: 50,
    borderColor:'black',
    alignSelf:'center',
    alignItems: 'center',
    marginTop: 10
  },
  mainText:{
    fontSize: 20, 
    fontWeight: 'bold'
  },
  middleBox: {
    alignItems: 'center'
  },
  activityWelcome:{
      width:largura*0.8,
      borderRadius: 10,
      height: 200,
      borderColor:'black',
      textAlign: 'center',
      padding: 20,
      backgroundColor: 'lightgray',
      fontSize: 30,
      shadowOpacity: 1,
      elevation: 10,
      textColor: 'black'
  },
  activityName:{
    color: 'green',
    fontSize: 15, 
    fontWeight: 'bold', 
    marginTop: 20
  },
  finalBox: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    marginTop: 50, 
    alignContent: 'center'
  },
  finalMainText:{
    color: 'black', 
    fontSize: 20, 
    fontWeight: 'bold', 
    marginLeft: 40
  },
  finalBoxText: {
    color: 'green', 
    fontSize: 30, 
    fontWeight: 'bold', 
    marginLeft: 40,
    borderColor:'lightgray', 
    padding: 5,
    shadowOpacity: 1,
    elevation: 1,
  }
});

export default estilo;