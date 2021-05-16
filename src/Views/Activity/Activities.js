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
import AsyncStorage from "@react-native-async-storage/async-storage";

const Activities = ( props ) => {
    const [activities, setActivities] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [editItens, setEditItens] = useState(true);
    const [delegate, setDelegate] = useState(true);
    
    const setInfos = async () => {
        const category = await AsyncStorage.getItem('category');
        const id = await AsyncStorage.getItem('id');
        if(category == 'oficial'){
            returnActivities(setActivities, category, id);
            setEditItens(true);
            setDelegate(false);
        } else if(category == 'encarregado'){
            returnActivities(setActivities, category, id);
            setEditItens(true);
            setDelegate(true);
        } else{
            returnActivities(setActivities);
            setEditItens(false);
            setDelegate(true);
        }
    }

    useEffect(() => { 
        try {
            setInfos()
            // returnAllActivities(props, category, setActivities, setEditItens)
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
                        delegateActivity={delegate}
                        displayActivity={true}
                        displayEditItens={editItens}
                    />
                </View>
            </View>
        </Fragment>
    );

}

export default Activities;