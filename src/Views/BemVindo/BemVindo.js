import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text, FlatList } from 'react-native';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from '../estilo.js';
import returnCurrentActivity from '../../services/api/Activity/find_all_api';
import returnActivitiesAdmin from '../../services/api/Activity/find_all_api';
import returnActivitiesClerk from '../../services/api/Activity/find_all_api';

function welcome(category, props, item, activitiesAdmin, activitiesClerk){
	if(category == 'oficial'){
		return(
			<View>
				<Text style={estilo.activityWelcome}>{item.activity_name}</Text>
				<TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: false, delegate: false }); }} >
					<Text style={estilo.activityName}>Clique aqui para mais detalhes!</Text>
				</TouchableOpacity>
			</View>
		)
	} else if(category == 'encarregado'){		
		return(
			<View>
				<Text style={estilo.activityWelcome}>Encarregado</Text>
				<FlatList
					nestedScrollEnabled 
					data={activitiesClerk}
					keyExtractor={(item) => item.id.toString()}
					renderItem={
						({ item }) => (
							<View>
								<Text style={estilo.activityWelcome}>{item.activity_name}</Text>
								<TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: false, delegate: true }); }} >
									<Text style={estilo.activityName}>Clique aqui para mais detalhes!</Text>
								</TouchableOpacity>
							</View>
						)
					}
				/>
			</View>
		)
	} else {
		console.log(activitiesAdmin)		
		return(
			<View>
				<Text style={estilo.activityWelcome}>Admin</Text>
				<FlatList
					nestedScrollEnabled 
					data={activitiesAdmin}
					keyExtractor={(item) => item.id.toString()}
					renderItem={
						({ item }) => (
							<View>
								<Text style={estilo.activityWelcome}>{item.activity_name}</Text>
								<TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: true, delegate: true }); }} >
									<Text style={estilo.activityName}>Clique aqui para mais detalhes!</Text>
								</TouchableOpacity>
							</View>
						)
					}
				/>
			</View>
		)
	}
}

const BemVindo = (props) => {
	const [currentActivity, setCurrentActivity] = useState({});
	const [activitiesAdmin, setActivitiesAdmin] = useState([]);
	const [activitiesClerk, setActivitiesClerk] = useState([]);
	const [category, setCategory] = useState('')

	const setInfos = async () => {
    try{
        const official = await AsyncStorage.getItem('id');
        const category = await AsyncStorage.getItem('category');
				console.log(official);
				console.log(category);
				setCategory(category);
				// setCatego(category);
				if(category == 'oficial'){
					returnCurrentActivity(setCurrentActivity, category, official, true);
				}else if(category == 'encarregado') {
					returnActivitiesClerk(setActivitiesClerk, category, official, true);
				} else {
					console.log('admin aqui')
					returnActivitiesAdmin(setActivitiesAdmin, category, null, true);
				}
    } catch (e) {
			console.log(e);
      alert('Failed');
    }
	}

	useEffect(() => {
		try {
			setInfos()
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
		// returnCurrentActivity(setCurrentActivity, category, officialId, true);
		// returnActivitiesAdmin(setActivitiesAdmin, category, officialId, true);
		// returnActivitiesClerk(setActivitiesClerk, category, null, true);

	}, []);

	return (
		<ScrollView>
			<Cabecalho navigation={props.navigation} />
			<View style={estilo.activityWelcome } >
				<Text>Sua tarefa de Hoje é: </Text>
				{/* <TouchableOpacity onPress={() => { console.log('atividade') }} >
					<Text style={ { color: 'green', fontSize: 15, fontWeight: 'bold'} }>Tarefa</Text>
				</TouchableOpacity> */}
				{ welcome(category, props, currentActivity, activitiesAdmin, activitiesClerk)}
			</View>
		</ScrollView>
	);
}

export default BemVindo;


