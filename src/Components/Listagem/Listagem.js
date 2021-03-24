import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import estilo from "./estilo";
import estiloInput from "../../Views/Role/estilo";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const Listagem = (props) => {
    const [errorMessage, setErrorMessage] = useState('');
	const name = props.listName;

    return (
        <FlatList
            data={props.lista}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({ item }) => (
                    <View style={estilo.linha_lista}>
                        <View style={estilo.linha_lista}>
                            <AntDesign name="checksquareo" size={24} color="black" />
                            <Text style={estiloInput.input_text}>{item[name]}</Text>
                        </View>
                        <View style={estilo.linha_lista}>
                            <TouchableOpacity onPress={() => {
                                props.navigation.push(props.update, item);
                                }
                            }>
                                <FontAwesome name="edit" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>{
                                try{
                                    props.deleteFunction(item.id);
                                    props.navigation.push(props.delete);
                                } catch(erro) {
                                    setErrorMessage(erro.mensagem);
                                }
                            }}>
                                <FontAwesome name="trash" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }
        />
    );
}

export default Listagem;