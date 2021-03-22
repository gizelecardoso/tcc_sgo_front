import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    //Geral
    container: {
        marginTop:20,
        flexGrow:2,
        justifyContent:"space-around",
        alignItems:"center",
        width:largura
    },
    header: {
        alignItems:"center"
    },
    title: {
       fontSize: 100 
    },
    subTitle:{
        fontSize: 20,
        color: "green"
    },
    input_container:{
        width:largura*0.8,
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        flexDirection: 'row',
        alignItems:"center"  
    },
    input_text: {
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15,
        height: 35,
        width:largura*0.5
    },
    submit:{
        width:largura*0.8,
        height:40,
        paddingTop:2.5,
        fontSize: 20,
        fontWeight: "bold",
        textAlign:"center",
        color:"#fff",
        borderRadius: 10,
        backgroundColor:"green",
    },
    erros:{
        fontSize: 15, 
        color: 'red', 
        fontWeight:'bold', 
        textAlign: 'center'
    }
});

export default estilo;