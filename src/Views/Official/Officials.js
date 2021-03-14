import React, { Fragment, useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import estilo from "./estilo.js";
import returnOfficials from "../../api/Official/find_all_api";
import deleteOfficial from "../../api/Official/delete_api";
import { AntDesign } from '@expo/vector-icons';
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { FontAwesome } from '@expo/vector-icons'; 

const Officials = ({ navigation }) => {
    const [officials, setOfficials] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => { 
        returnOfficials(setOfficials);
    }, []);


    return(
        <Fragment>
            <Cabecalho title={'Funcionários(as)'} navigation={navigation} page={'BemVindo'}/>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("CreateOfficial")}>                
                        <AntDesign name="pluscircle" size={20} style={estilo.adicionar}/>
                    </TouchableOpacity>
                </View>
                <View style={estilo.lista_items}>
                    <FlatList
                        data={officials}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={
                            ({ item }) => (
                                <View style={estilo.linha_lista}>
                                    <View style={estilo.linha_lista}>
                                        <AntDesign name="checksquareo" size={24} color="black" />
                                        
                                        <Text style={estilo.input_text}>{item.official_name}</Text>
                                    </View>
                                    <View style={estilo.linha_lista}>
                                        <TouchableOpacity onPress={() => {
                                            navigation.navigate("UpdateOfficial", item);
                                            }
                                        }>
                                            <FontAwesome name="edit" size={24} color="black" />
                                        </TouchableOpacity>
                                        
                                        <TouchableOpacity onPress={() =>{
                                            try{
                                                deleteOfficial(item.id);
                                                navigation.push("Officials");
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

export default Officials;