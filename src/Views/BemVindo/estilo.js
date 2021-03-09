import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
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
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        width:largura*0.8,
        flexDirection: 'row',
        alignItems:"center"  
    },
    input_text: {
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15
    },
    submit:{
        width:largura*0.8,
        backgroundColor:"green",
        fontWeight: "bold",
        fontSize: 20,
        borderRadius: 10,
        color:"#fff",
        textAlign:"center",
        alignItems:"center",
        height:40
    }
});

export default estilo;