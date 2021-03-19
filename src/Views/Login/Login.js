import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity, TextInputComponent } from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { useState } from "react/cjs/react.development";
import loginApi from "../../services/api/Login/login_api";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Login = ({ navigation }) => {
    const [loginName, setLoginName] = useState('');
    const [password, setPassword] = useState('');
    const [mensagemErro, setMensagemErro] = useState('');

    const tryValidateAccess = async() => {
        try {
            const token = await loginApi(loginName, password);
            await AsyncStorage.setItem('login_official_token', token.token);
            setLoginName('');
            setPassword('');
            navigation.navigate('BemVindo', {name_official: token.official.official_name, login_name: token.official.login_name});
        }catch(erro){
            setMensagemErro(erro.message);
        }
    }

    return(
        <Fragment>
            <View style={estilo.container}>
                <View style={estilo.header}>
                    <Text style={estilo.title}>SGO</Text>
                    <Text style={estilo.subTitle}>Sistema de Gerenciamento de Obras</Text>
                </View>
                <View style={estilo.input_container} >
                    <FontAwesome5 name='envelope' size={30} style={{marginRight:40}}/>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder='Digite seu nome de usuário'
                        autoCapitalize='none'
                        onChangeText={(texto) => setLoginName(texto)}
                        value={loginName}
                    />

                </View>
                <View style={estilo.input_container} >
                    <Entypo name='lock' size={30} style={{marginRight:40}}/>
                    <TextInput
                        style={estilo.input_text}
                        placeholder='Digite sua senha'
                        secureTextEntry={true}
                        autoCapitalize='none'
                        onChangeText={(texto) => setPassword(texto)}
                        value={password}
                    />
                </View>
                <Text style={{color: 'red'}}>{mensagemErro}</Text>
                <TouchableOpacity onPress={tryValidateAccess}>
                    <Text style={estilo.submit}>Entrar</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default Login;