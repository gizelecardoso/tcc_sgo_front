import React, { Fragment, useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js";
import returnRole from "../../api/Role/find_role_by_id";
import updateRole from "../../api/Role/update_role_api";
import { Cabecalho } from "../../Components/Cabecalho";

const UpdateOfficial = (props) => {
    const [officialCode, setOfficialCode] = useState(props.official.params.official_code);
    const [officialName, setOfficialName] = useState(props.official.params.official_name);
    const [role, setRole] = useState(props.official.params.role_id);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const tryUpdateRole = async() =>{
        try{
            await updateOfficial(officialCode, officialName, props.official.params.id);
            props.navigation.push("Officials");
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    return(
        <Fragment>
            <View style={estilo.container}>
                <Cabecalho title={'Atualizar Funcionários(as)'} navigation={props.navigation} page={'Officials'}/>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código Funcionário(a)</Text>
                    <TextInput
                        onChangeText={text => setOfficialCode(text)}
                        placeholder="Digite o número do(a) Funcionário(a)"
                        defaultValue={officialCode}
                        style={estilo.input_text}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Nome do Funcionário(a)</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o nome da Funcionário(a)"
                        onChangeText={text => setOfficialName(text)}
                        defaultValue={officialName}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Função do Funcionário(a)</Text>
                    <Picker
                        selectedValue={role.role_name} 
                        style={estilo.input_text}
                        onValueChange={(itemValue) => setRole(itemValue)}
                        >
                        {
                            roles.map(role => {
                                return <Picker.Item label={role.role_name} value={role.id} key={role.id}/>
                            })
                        }
                    </Picker>
                    <Text>{errorMessage}</Text>
                </View>
                <TouchableOpacity onPress={tryUpdateOfficial}>
                    <Text style={estilo.submit}>Atualizar Funcionário(a)</Text>
                </TouchableOpacity>
            </View>
        </Fragment>
    );

}

export default UpdateOfficial;