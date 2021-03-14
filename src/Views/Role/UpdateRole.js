import React, { Fragment, useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js";
import returnRole from "../../api/Role/find_role_by_id";
import updateRole from "../../api/Role/update_role_api";
import { Cabecalho } from "../../Components/Cabecalho";

const UpdateRole = (props) => {
    const [roleCode, setRoleCode] = useState(props.route.params.role_code);
    const [roleName, setRoleName] = useState(props.route.params.role_name);
    const [roleDescription, setRoleDescription] = useState(props.route.params.role_description);

    const [errorMessage, setErrorMessage] = useState('');

    const tryUpdateRole = async() =>{
        try{
            await updateRole(roleCode, roleName, roleDescription, props.route.params.id);
            props.navigation.push("Roles");
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    return(
        <Fragment>
            <Cabecalho title={'Cadastrar Funções'} navigation={props.navigation} page={'Roles'}/>
            <View style={estilo.container}>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código Função</Text>
                    <TextInput
                        onChangeText={text => setRoleCode(text)}
                        placeholder="Digite o número da Função"
                        defaultValue={roleCode}
                        style={estilo.input_text}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Nome da Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o nome da Função"
                        onChangeText={text => setRoleName(text)}
                        defaultValue={roleName}
                    />
                  </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Descrição da Função</Text>
                    <TextInput
                        multiline = {true}
                        numberOfLines = {4}
                        style={estilo.input_area} 
                        placeholder="Digite a descrição da Função"
                        onChangeText={text => setRoleDescription(text)}
                        defaultValue={roleDescription}
                    />
                    <Text>{errorMessage}</Text>
                </View>
                <TouchableOpacity onPress={tryUpdateRole}>
                    <Text style={estilo.submit}>Atualizar Função</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default UpdateRole;