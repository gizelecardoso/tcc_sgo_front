import React, { Fragment, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js"
import createRole from "../../api/Role/role_api"
import { Cabecalho } from "../../Components/Cabecalho";

const CreateRole = ({ navigation }) => {
    const [roleCode, setRoleCode] = useState('');
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const tryCreateRole = async() =>{
        try{
            await createRole(roleCode, roleName, roleDescription);
            navigation.push("Roles");
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }
    return(
        <Fragment>
            <Cabecalho title={'Cadastrar Funções'} navigation={navigation} page={'Roles'}/>
            <View style={estilo.container}>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o número da Função"
                        onChangeText={texto => setRoleCode(texto)}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código da Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o nome da Função"
                        onChangeText={texto => setRoleName(texto)}
                    />
                  </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Descrição da Função</Text>
                    <TextInput
                        multiline = {true}
                        numberOfLines = {4}
                        style={estilo.input_area} 
                        placeholder="Digite a descrição da Função"
                        onChangeText={texto => setRoleDescription(texto)}
                    />
                    <Text>{errorMessage}</Text>
                </View>
                <TouchableOpacity onPress={tryCreateRole}>
                    <Text style={estilo.submit}>Inserir Função</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default CreateRole;