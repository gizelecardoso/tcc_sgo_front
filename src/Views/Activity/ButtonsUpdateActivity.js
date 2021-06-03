import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { constantes } from "./constantes.js";
import estiloUnico from "./estilo";
import estiloButton from "../../estilo";
import updateNovo from "../../services/api/Activity/update_api";
import estilo from '../estilo';

function displayUpdateActivity(editable, handleSubmit, isValid, start, stop, finish, values, update, delegate, setReason, reason) {
	const date = new Date();
	if (editable || delegate) {
		return (
			<TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
				<Text style={estiloButton.submit}>{constantes.buttomAtualizar}</Text>
			</TouchableOpacity>
		)
	} else {
		return (
			<View style={{ flexDirection: 'column', alignItems: 'center' }}>
				<TouchableOpacity onPress={() => { update(values, values.valueId, 'executando', values.officialId, date) }} disabled={!start}>
					<Text style={start === true ? estiloUnico.buttonStart : estiloUnico.disabled}>Iniciar</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => { update(values, values.valueId, 'finalizada', values.officialId, date) }} disabled={!finish}>
						<Text style={finish === true ? estiloUnico.buttonFinish : estiloUnico.disabled}>Finalizar</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => {
							update(values, values.valueId, 'pausada', values.officialId, date, reason) 
						}}
						disabled={!stop}
					>
						<Text style={stop === true ? estiloUnico.buttonStop : estiloUnico.disabled}>Parar</Text>
					</TouchableOpacity>
				</View>
				<TextInput
					name='Motivo'
					placeholder='Motivo'
					style={estilo.input_text}
					onChangeText={(item) => setReason(item)}
					editable={stop}
				/>
			</View>
		)
	}
}


const ButtonsUpdateActivity = (props) => {
	const [start, setStart] = useState(false);
	const [stop, setStop] = useState(false);
	const [finish, setFinish] = useState(false);
	const [reason, setReason] = useState(false);

	const updateStatus = async (values, id, status, officialId, date, reason ) => {
		console.log('value', values, 'id', id, 'status', status, 'officialId', officialId, 'date', date, 'reason', reason)
		await updateNovo(values, id, status, officialId, date, reason);
		props.navigation.navigate('Activities');
	}

	const setStatusUpdate = () => {
		if (props.activityStatus === 'pendente') {
			setStart(true);
		} else if (props.activityStatus === 'executando' && props.evolution === 100 || props.activityStatus === 'atrasada' && props.evolution === 100) {
			setStart(false);
			setStop(true);
			setFinish(true);
		} else if (props.activityStatus === 'executando' || props.activityStatus === 'atrasada') {
			setStart(false);
			setStop(true);
			setFinish(false);
		} else if (props.activityStatus === 'pausada') {
			setStart(true);
			setStop(false);
			setFinish(false);
		} else {
			setStart(false);
			setStop(false);
			setFinish(false);
		}
	}

	useEffect(() => {
		setStatusUpdate()
	}, []);

	return (
		<View>
			{displayUpdateActivity(
				props.editable,
				props.handleSubmit,
				props.isValid,
				start,
				stop,
				finish,
				props.values,
				updateStatus,
				props.delegate,
				setReason,
				reason)}
		</View>
	)
}

export default ButtonsUpdateActivity;