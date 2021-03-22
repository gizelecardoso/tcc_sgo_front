import React, { Fragment, useState, useEffect } from "react";
import { View } from "react-native";
import estilo from "./estilo.js"
import returnRoles from "../../services/api/Role/roles_api"
import deleteRole from "../../services/api/Role/delete_role_api"
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { constantes } from "./constantes";
import ButtomCreate from "../../Components/Buttons/ButtomCreate.js";

const Roles = ({ navigation }) => {
    const [roles, setRoles] = useState([]);
    
    useEffect(() => { 
        returnRoles(setRoles);
    }, []);

    return(
        <Fragment>
            <Cabecalho title={constantes.title} navigation={navigation}/>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <ButtomCreate navigation={navigation} create={constantes.buttomCreate}/>
                </View>
                <View style={estilo.lista_items}>
                   < Listagem lista={roles} navigation={navigation} listName={'role_name'} update={constantes.buttomUpdate} delete={constantes.mainList} deleteFunction={deleteRole}/>
                </View>
            </View>
        </Fragment>
    );

}

export default Roles;