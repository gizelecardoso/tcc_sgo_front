import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
    container: {
        marginTop:20,
        flexGrow:2,
        justifyContent:"space-between",
        alignItems:"center",
        width:largura
    },
    header: {
        flexDirection: 'row',
        marginTop:20,
        alignItems:"center"
    },
    title: {
       fontSize: 15, 
       fontWeight: 'bold'
    },
    input_container:{
        width:largura*0.8,
    },
    container_infos:{
        width:largura*0.8,
        flexDirection: 'row',
    },
    item_select: {
        width:largura*0.8,
        alignItems:"center",
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15
    },
    input_text: {
        alignItems:"center",
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15,
    },
    input_text_lista: {
        alignItems:"flex-start",
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "lightgray",
        textAlign:"center", 
        fontWeight: "bold",
        fontSize:15,
        width: 150
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
    },
    roles_container: {
        flexGrow:2,
        alignItems:"center",
        margin: 20
    },
    search:{
        width:largura*0.75,
        flexDirection: 'row',
        borderColor:'black',
        borderWidth:1,
        height: 30,
        fontSize: 15,
        borderRadius:10,
        alignSelf:'center'

    },
    lista_items:{
        backgroundColor:"lightgray",
        borderColor:'black',
        borderWidth:1,
        width:largura*0.8,
        marginTop:10,
        height:altura*0.5
    },

    erros:{
        fontSize: 15, 
        color: 'red', 
        fontWeight:'bold', 
        textAlign: 'center',
        marginBottom:20
    },
    activityWelcome:{
        width:largura*0.8,
        borderRadius: 10,
        height: 200,
        backgroundColor: 'red',
        borderColor:'black',
        alignSelf:'center'
    },
});

export default estilo;