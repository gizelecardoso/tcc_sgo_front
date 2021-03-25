import React, { Fragment, useState, useEffect } from "react";
import { Text, View } from "react-native";
import estilo from "../estilo";
import returnCompanies from "../../services/api/Company/find_all_api";
import deleteCompany from "../../services/api/Company/delete_api";
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { constantes } from "./constantes";
import ButtomCreate from "../../Components/Buttons/ButtomCreate.js";

const Companies = ({ navigation }) => {
    const [companies, setCompanies] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => { 
        try {
            returnCompanies(setCompanies);
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
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
                   < Listagem lista={companies} navigation={navigation} listName={'company_name'} update={constantes.buttomUpdate} delete={constantes.mainList} deleteFunction={deleteCompany}/>
                </View>
            </View>
        </Fragment>
    );

}

export default Companies;