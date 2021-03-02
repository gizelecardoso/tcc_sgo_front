import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const estilo = StyleSheet.create({
    container: {
        flexGrow:2,
        justifyContent:"space-between",
        alignItems:"center",
        width:largura
    },
    header: {
        flexDirection: 'row',
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
    },
    input_container:{
        width:largura*0.8,
         
    },
    input_text: {
        alignItems:"center",
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15
    },
    input_area: {
        alignItems:"center",
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        fontWeight: "bold",
        height:100,
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