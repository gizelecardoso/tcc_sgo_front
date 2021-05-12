import React, { Fragment, useState, useEffect } from "react";
import { Text, View } from "react-native";
import estilo from "../estilo";
import returnActivities from "../../services/api/Activity/find_all_api";
import deleteActivity from "../../services/api/Activity/delete_api";
import { Cabecalho } from "../../Components/Cabecalho";
import { Listagem } from "../../Components/Listagem";
import { Pesquisar } from "../../Components/Pesquisar";
import { constantes } from "./constantes";
import ButtomCreate from "../../Components/Buttons/ButtomCreate.js";

function returnAllActivities(props) {
    if(props.category == 'encarregado' || props.category == 'oficial'){
        returnActivities(setActivities, props.category, props.id);
    } else{
        returnActivities(setActivities);
    }
}

const Activities = ({ props }) => {
    const [activities, setActivities] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    useEffect(() => { 
        try {
            returnAllActivities(props)
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
    }, []);

    return(
        <Fragment>
            <Cabecalho title={constantes.title} navigation={props.navigation}/>
            <View style={estilo.roles_container}>
                <View style={estilo.header}>
                    <View style={estilo.search}>
                        <Pesquisar />
                    </View>
                    <ButtomCreate navigation={props.navigation} create={constantes.buttomCreate}/>
                </View>
                <View style={estilo.lista_items}>
                    < Listagem 
                        lista={activities} 
                        navigation={props.navigation} 
                        listName={'activity_name'} 
                        update={constantes.buttomUpdate} 
                        delete={constantes.mainList} 
                        deleteFunction={deleteActivity}
                        delegateActivity={true}
                        displayActivity={true}
                    />
                </View>
            </View>
        </Fragment>
    );

}

export default Activities;