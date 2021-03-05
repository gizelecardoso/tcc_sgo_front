import React, { Fragment, useState, useEffect } from "react";
import { View } from "react-native";
import estilo from "./estilo.js"
import returnRoles from "../../api/Role/roles_api"
import { AntDesign } from '@expo/vector-icons';
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";

const Roles = ({navigation}) => {
    const [roles, setRoles] = useState([]);

    useEffect(() => { 
        returnRoles(setRoles);
    }, [])

    return(
        <Fragment>
            <View style={estilo.roles_container}>
                <Cabecalho title={'Funções'}/>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <AntDesign name="pluscircle" size={20} style={estilo.adicionar}/>
                </View>
                <View style={estilo.lista_items}>
                    <Listagem roles={roles} />
                </View>
            </View>
        </Fragment>
    );

}

export default Roles;