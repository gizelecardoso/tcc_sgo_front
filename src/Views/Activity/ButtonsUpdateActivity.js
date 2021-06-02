import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { constantes } from "./constantes.js";
import estiloUnico from "./estilo";
import estiloButton from "../../estilo";
import updateNovo from "../../services/api/Activity/update_api";

function displayUpdateActivity(editable, handleSubmit, isValid, start, stop, finish, values, update, delegate) {
	const date = new Date().getDate();
	if (editable || delegate) {
		return (
			<TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
				<Text style={estiloButton.submit}>{constantes.buttomAtualizar}</Text>
			</TouchableOpacity>
		)
	}else {
		return (
			<View style={{ flexDirection: 'column' , alignItems: 'center'}}>
				<TouchableOpacity onPress={() => { update(values, values.valueId, 'executando', date) }} disabled={!start}>
					<Text style={start === true ? estiloUnico.buttonStart: estiloUnico.disabled}>Iniciar</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => { update(values, values.valueId, 'finalizada', date) }} disabled={!finish}>
						<Text style={finish === true ? estiloUnico.buttonFinish: estiloUnico.disabled}>Finalizar</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { update(values, values.valueId, 'pausada', date) }} disabled={!stop}>
						<Text style={stop === true ? estiloUnico.buttonStop: estiloUnico.disabled}>Parar</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const ButtonsUpdateActivity = (props) => {
	const [start, setStart] = useState(false);
	const [stop, setStop] = useState(false);
	const [finish, setFinish] = useState(false);

	const updateStatus = async (values, id, status) => {
		await updateNovo(values, id, status);
		props.navigation.navigate('Activities');
	}

  const setStatusUpdate = () => {
    if (props.activityStatus === 'pendente'){
      setStart(true);
    } else if(props.activityStatus === 'executando' && props.evolution === 100 || props.activityStatus === 'atrasada' && props.evolution === 100) {
      setStart(false);
      setStop(true);
      setFinish(true);
    } else if(props.activityStatus === 'executando' || props.activityStatus === 'atrasada') {
      setStart(false);
      setStop(true);
      setFinish(false);
    } else if(props.activityStatus === 'pausada') {
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
      { displayUpdateActivity(
          props.editable, 
          props.handleSubmit, 
          props.isValid,
          start,
          stop,
          finish,
          props.values,
					updateStatus,
          props.delegate)}
			</View>
	)
}

export default ButtonsUpdateActivity;