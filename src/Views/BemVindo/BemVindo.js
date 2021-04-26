import React, { Fragment } from 'react';
import { ScrollView, View, TouchableOpacity, Text } from 'react-native';
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";
import estilo from '../estilo.js';

const BemVindo = (props) => {
	return (
		<ScrollView>
			<Cabecalho navigation={props.navigation} />
			<View style={estilo.activityWelcome } >
				<Text>Sua tarefa de Hoje é: </Text>
				<TouchableOpacity onPress={() => { console.log('atividade') }} >
					<Text style={ { color: 'green', fontSize: 15, fontWeight: 'bold'} }>Tarefa</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

export default BemVindo;


