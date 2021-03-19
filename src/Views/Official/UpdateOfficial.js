import React, { Fragment, useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js";
import { Cabecalho } from "../../Components/Cabecalho";
import { Picker } from "@react-native-picker/picker";
import updateOfficial from "../../services/api/Official/update_api";
import returnRoles from "../../services/api/Role/roles_api.js";

const UpdateOfficial = (props) => {
    const [officialCode, setOfficialCode] = useState(props.route.params.official_code);
    const [officialName, setOfficialName] = useState(props.route.params.official_name);
    const [role, setRole] = useState(props.route.params.role_id);
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const tryUpdateOfficial = async() =>{
        try{
            await updateOfficial(officialCode, officialName, props.official.params.id);
            props.navigation.push('Officials');
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    useEffect(() => {
        returnRoles(setRoles);
    }, []);

    return(
        <Fragment>
            <View style={estilo.container}>
                <Cabecalho title={'Atualizar Funcionários(as)'} navigation={props.navigation} page={'Officials'}/>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:'bold'}}>Código Funcionário(a)</Text>
                    <TextInput
                        onChangeText={text => setOfficialCode(text)}
                        placeholder='Digite o número do(a) Funcionário(a)'
                        defaultValue={officialCode}
                        style={estilo.input_text}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:'bold'}}>Nome do Funcionário(a)</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder='Digite o nome da Funcionário(a)'
                        onChangeText={text => setOfficialName(text)}
                        defaultValue={officialName}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Função do Funcionário(a)</Text>
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