import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

const Login = () => {
    const onPress = () =>{
        console.log("Clicou")
    }
    return(
        <Fragment>
            <View style={estilo.container}>
                <View style={estilo.header}>
                    <Text style={estilo.title}>SGO</Text>
                    <Text style={estilo.subTitle}>Sistema de Gerenciamento de Obras</Text>
                </View>
                <View style={estilo.input_container} >
                    <FontAwesome5 name="envelope" size={30} style={{marginRight:40}}/>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite seu nome de usuário"
                    />
                </View>
                <View style={estilo.input_container} >
                    <Entypo name="lock" size={30} style={{marginRight:40}}/>
                    <TextInput
                        style={estilo.input_text}
                        placeholder="Digite sua senha"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Text style={estilo.submit}>Entrar</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default Login;