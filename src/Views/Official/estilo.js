import { Dimensions, StyleSheet } from "react-native";

const largura = Dimensions.get("screen").width;
const altura = Dimensions.get("screen").height;

const estilo = StyleSheet.create({
    container: {
        marginTop:20,
        flexGrow:2,
        justifyContent:"space-between",
        alignItems:"center",
        width:largura,
        alignItems:"center"
    },
    header: {
        flexDirection: 'row',
        marginTop:20,
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
    search_input:{
        width:largura*0.5,
        marginLeft:10
    },
    adicionar:{
        width:largura*0.2,
        width:20,
        marginLeft:5

    },
    lista_items:{
        backgroundColor:"lightgray",
        borderColor:'black',
        borderWidth:1,
        width:largura*0.8,
        marginTop:10,
        height:altura*0.6
    },
    linha_lista:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
});

export default estilo;