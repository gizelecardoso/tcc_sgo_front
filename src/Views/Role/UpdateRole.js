import React, { Fragment, useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js"
import returnRole from "../../api/Role/find_role_by_id"
import { Cabecalho } from "../../Components/Cabecalho";

const UpdateRole = () => {
    const [roleCode, setRoleCode] = useState('');
    const [roleName, setRoleName] = useState('');
    const [roleDescription, setRoleDescription] = useState('');
    const [role, setRole] = useState({});

    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => { 
        returnRole(setRole);
    }, [])

    // const tryCreateRole = async() =>{
    //     try{
    //         await updateRole(roleCode, roleName, roleDescription);
    //     } catch(erro) {
    //         setErrorMessage(erro.mensagem);
    //     }
    // }
    return(
        <Fragment>
            <View style={estilo.container}>
                <Cabecalho title={'Cadastrar Funções'}/>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o número da Função"
                        onChangeText={texto => setRoleCode(texto)}
                        //value={roleCode}
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
                <TouchableOpacity >
                    <Text style={estilo.submit}>Inserir Função</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default UpdateRole;