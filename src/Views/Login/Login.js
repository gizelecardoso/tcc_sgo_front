import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity, TextInputComponent } from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { useState } from "react/cjs/react.development";

const Login = ({ navigation }) => {

    const [data, setData] = useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
    })

    const onPress = () =>{
        navigation.navigate("BemVindo")
    }

    const textInputChange = (texto) => {
        if(texto.length > 10) {
            setData({
                ...data,
                email:texto,
                check_textInputChange: true
            });
        }else {
            setData({
                ...data,
                email:texto,
                check_textInputChange: false
            });
        }
    }

    const handlePasswordChange = (texto) => {
        setData({
            ...data,
            password:texto
        });
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
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
                        autoCapitalize="none"
                        onChangeText={(texto) => textInputChange(texto)}
                    />
                    {data.check_textInputChange ?
                        <Text styles={{color: 'green'}}>OK</Text>
                    : null}

                </View>
                <View style={estilo.input_container} >
                    <Entypo name="lock" size={30} style={{marginRight:40}}/>
                    <TextInput
                        style={estilo.input_text}
                        placeholder="Digite sua senha"
                        secureTextEntry={data.secureTextEntry ? true : false}
                        autoCapitalize="none"
                        onChangeText={(texto) => handlePasswordChange(texto)}
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