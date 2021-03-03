import React, { Fragment, useState, useEffect } from "react";
import { TextInput, View, Text, TouchableOpacity, FlatList, Button } from "react-native";
import estilo from "./estilo.js"
//import returnRoles from "../../api/Role/roles_api"
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  

const Roles = () => {
    const [roles, setRoles] = useState([]);

    useEffect(() => { 
        const returnRoles = async() => {
            const response = await fetch("http://localhost:3000/roles");
            const responseJson = await response.json();
            console.log(responseJson)
            setRoles(responseJson);

        }
        returnRoles();
    }, [])

    const dados = [{item:'Ver filme'}, {item:'outra coisa'}, {item:'novo'},{item:'Ver filme'}]
    return(
        <Fragment>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <Text style={estilo.title}>Olá, </Text>
                    <Text style={estilo.subTitle}>Gabriel</Text>
                </View>
                <View style={estilo.header}>
                    <Text style={estilo.title}>Funções</Text>
                </View>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <TextInput
                            placeholder="Pesquisar"
                            style={estilo.search_input}
                        />
                        <EvilIcons name="search" size={24} color="black"  />
                    </View>
                    <AntDesign name="pluscircle" size={20} style={estilo.adicionar}/>
                </View>
                <View style={estilo.lista_items}>
                    <FlatList
                    data={roles}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) => (
                            <View style={estilo.linha_lista}>
                                <AntDesign name="checksquareo" size={24} color="black" />
                                <Text style={estilo.input_text}>{item.role_name}</Text>
                                <FontAwesome name="edit" size={24} color="black" />
                                <FontAwesome name="trash" size={24} color="black" />
                            </View>
                        )
                    }
                    />
                </View>
            </View>
        </Fragment>
    );

}

export default Roles;