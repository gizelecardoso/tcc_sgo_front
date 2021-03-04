import React from "react";
import { View, Text, FlatList } from "react-native";
import estilo from "./estilo.js";
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';

const Listagem = (props) => {
    return (
        <FlatList
            data={props.roles}
            keyExtractor={(item) => item.id.toString()}
            renderItem={
                ({ item }) => (
                    <View style={estilo.linha_lista}>
                        <AntDesign name="checksquareo" size={24} color="black" />
                        <Text style={estilo.input_text}>{item.role_name}</Text>
                        <TouchableOpacity onPress={tentar(item.id)}>
                            <FontAwesome name="edit" size={24} color="black" />
                        </TouchableOpacity>
                        <FontAwesome name="trash" size={24} color="black" />
                    </View>
                )
            }
        />
    );
}

export default Listagem;