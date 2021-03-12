import React, { Fragment, useEffect, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js"
import returnRoles from "../../api/Role/roles_api";
import createOfficial from "../../api/Official/create_api";
import { Cabecalho } from "../../Components/Cabecalho";
import { Picker } from "@react-native-picker/picker";

const CreateOfficial = ({ navigation }) => {
    const [officialCode, setOfficialCode] = useState('');
    const [officialName, setOfficialName] = useState('');
    const [role, setRole] = useState(0);
    const [roles, setRoles] = useState([]);

    const [errorMessage, setErrorMessage] = useState('');

    const tryCreateOfficial = async () => {
        try{
            await createOfficial(officialCode, officialName, role);
            console.log('deu certo')
        } catch (erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    useEffect(() => {
        returnRoles(setRoles);
    }, []);

    return (
        <Fragment>
            <Cabecalho title={'Cadastrar Funcionários(as)'} navigation={navigation} />
            <View style={estilo.container}>
                <View style={estilo.input_container} >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Código Funcionário(a)</Text>
                    <TextInput
                        style={estilo.input_text}
                        placeholder="Digite o número do Funcionário(a)"
                        onChangeText={texto => setOfficialCode(texto)}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Nome do Funcionário(a)</Text>
                    <TextInput
                        style={estilo.input_text}
                        placeholder="Digite o nome do Funcionário(a)"
                        onChangeText={texto => setOfficialName(texto)}
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>Função do Funcionário(a)</Text>
                    <Picker 
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

                <TouchableOpacity onPress={tryCreateOfficial}>
                    <Text style={estilo.submit}>Inserir Função</Text>
                </TouchableOpacity>

            </View>

        </Fragment>
    );

}

export default CreateOfficial;