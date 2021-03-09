import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

const Inicio = ({ navigation }) => {
    const onPress = () =>{
        navigation.navigate("Login")
    }
    return(
        <Fragment>
            <View style={estilo.container}>
                <View style={estilo.header}>
                    <Text style={estilo.title}>SGO</Text>
                    <Text style={estilo.subTitle}>Sistema de Gerenciamento de Obras</Text>
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Text style={estilo.submit}>Entrar</Text>
                </TouchableOpacity>
               
            </View>
        </Fragment>
    );

}

export default Inicio;