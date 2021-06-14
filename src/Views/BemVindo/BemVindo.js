import React, { Fragment, useState, useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, Text, FlatList } from 'react-native';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";
import AsyncStorage from '@react-native-async-storage/async-storage';
import estilo from './estilo.js';
import returnCurrentActivity from '../../services/api/Activity/find_all_api';
import returnActivitiesAdmin from '../../services/api/Activity/find_all_api';
import returnActivitiesClerk from '../../services/api/Activity/find_all_api';

function stoppedActivity(item){
	if(item.reason_to_stop){
		return(
			<Text style={estilo.activityStatus}>{item.reason_to_stop}</Text>
		)
	}
}

function welcome(category, props, item, activitiesAdmin, activitiesClerk){
	if(category == 'oficial' && item != null){
		return(
			<>
				<Text style={estilo.mainText}>Sua tarefa de Hoje é: </Text>
				<View style={estilo.middleBox}>
					<View style={estilo.activityWelcome}>
						<Text style={estilo.activityName}>{item.activity_name}</Text>
						<Text style={estilo.activityStatus}>{item.activity_status}</Text>
					</View>
					<TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: false, delegate: false }); }} >
						<Text style={estilo.activityLink}>Clique aqui para mais detalhes!</Text>
					</TouchableOpacity>
				</View>
			</>
		)
	} else if(category == 'encarregado'){
		return(
			<View style={estilo.mainBox}>
				<Text style={estilo.mainText}>Tarefas Atrasadas e Paradas </Text>
				<FlatList
					nestedScrollEnabled={true}
					data={activitiesClerk}
					keyExtractor={(item) => item.id.toString()}
					renderItem={
						({ item }) => (
							<View style={estilo.middleBox}>
								<View style={estilo.activityWelcome}>
									<Text style={estilo.activityName}>{item.activity_name}</Text>
									<Text style={estilo.activityStatus}>{item.activity_status}</Text>
									{stoppedActivity(item)}
								</View>
								{/* <TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: false, delegate: true }); }} >
									<Text style={estilo.activityLink}>Clique aqui para mais detalhes!</Text>
								</TouchableOpacity> */}
							</View>
						)
					}
				/>
			</View>
		)
	} else if(category == 'administrador') {
		return(
			<View style={estilo.mainBox}>
				<Text style={estilo.mainText}>Tarefas Atrasadas e Paradas </Text>
				<FlatList
					nestedScrollEnabled={true} 
					data={activitiesAdmin}
					keyExtractor={(item) => item.id.toString()}
					renderItem={
						({ item }) => (
							<View style={estilo.middleBox}>
								<View style={estilo.activityWelcome}>
									<Text style={estilo.activityName}>{item.activity_name}</Text>
									<Text style={estilo.activityStatus}>{item.activity_status}</Text>
									{stoppedActivity(item)}
								</View>
								{/* <TouchableOpacity onPress={() => { props.navigation.navigate('UpdateActivity', { item, editable: true, delegate: true }); }} >
									<Text style={estilo.activityLink}>Clique aqui para mais detalhes!</Text>
								</TouchableOpacity> */}
							</View>
						)
					}
				/>
			</View>
		)
	} else {
		return(
			<>
				<Text style={estilo.mainText}>Sua tarefa de Hoje é: </Text>
				<View style={estilo.middleBox}>
					<View style={estilo.activityWelcome}>
					</View>
				</View>
			</>
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
				setCategory(category);
				if(category == 'oficial'){
					returnCurrentActivity(setCurrentActivity, category, official, true);
				}else if(category == 'encarregado') {
					returnActivitiesClerk(setActivitiesClerk, category, official, true);
				} else {
					returnActivitiesAdmin(setActivitiesAdmin, category, null, true);
				}
    } catch (e) {
      alert('Failed');
    }
	}

	useEffect(() => {
		try {
			setInfos()
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}, []);

	return (
		<ScrollView>
			<Cabecalho navigation={props.navigation} />
			<View style={estilo.mainBox } >
				{ welcome(category, props, currentActivity, activitiesAdmin, activitiesClerk)}
			</View>
		</ScrollView>
	);
}

export default BemVindo;


