import React, { Fragment, useState, useEffect } from "react";
import { View, Text } from "react-native";
import estilo from "../Role/estilo";
import returnOfficials from "../../services/api/Official/find_all_api";
import deleteOfficial from "../../services/api/Official/delete_api";
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { constantes } from "./constantes.js";
import ButtomCreate from "../../Components/Buttons/ButtomCreate.js";

const Officials = ({ navigation }) => {
    const [officials, setOfficials] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => { 
        try {
            returnOfficials(setOfficials);
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
    }, []);


    return(
        <Fragment>
            <Cabecalho title={constantes.title} navigation={navigation} page={constantes.page}/>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <ButtomCreate navigation={navigation} create={constantes.buttomCreate}/>
                </View>
                <View style={estilo.lista_items}>
                    < Listagem lista={officials} navigation={navigation} listName={'official_name'} update={constantes.buttomUpdate} delete={constantes.mainList} deleteFunction={deleteOfficial}/>
                </View>
            </View>
        </Fragment>
    );

}

export default Officials;