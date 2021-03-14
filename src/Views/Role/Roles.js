import React, { Fragment, useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import estilo from "./estilo.js"
import returnRoles from "../../api/Role/roles_api"
import deleteRole from "../../api/Role/delete_role_api"
import { AntDesign } from '@expo/vector-icons';
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { FontAwesome } from '@expo/vector-icons'; 

const Roles = ({ navigation }) => {
    const [roles, setRoles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => { 
        returnRoles(setRoles);
    }, []);


    return(
        <Fragment>
            <Cabecalho title={'Funções'} navigation={navigation}/>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("BemVindo")}>                
                        <AntDesign name="pluscircle" size={20} style={estilo.adicionar}/>
                    </TouchableOpacity>
                </View>
                <View style={estilo.lista_items}>
                    <FlatList
                        data={roles}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={
                            ({ item }) => (
                                <View style={estilo.linha_lista}>
                                    <View style={estilo.linha_lista}>
                                        <AntDesign name="checksquareo" size={24} color="black" />
                                        
                                        <Text style={estilo.input_text}>{item.role_name}</Text>
                                    </View>
                                    <View style={estilo.linha_lista}>
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate("UpdateRole", item);
                                            }
                                        }>
                                            <FontAwesome name="edit" size={24} color="black" />
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={() =>{
                                            try{
                                                deleteRole(item.id);
                                                navigation.push("Roles");
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
                </View>
                <Text>{errorMessage}</Text>
            </View>
        </Fragment>
    );

}

export default Roles;