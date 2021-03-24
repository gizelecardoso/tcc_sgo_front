import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import estilo from "../Inicio/estilo";
import estiloButton from "../../estilo";
import { constantes } from './constantes';
import Alert from "../../Components/Alert/ConfirmAlert";

const Inicio = ({ navigation }) => {
	const [visible, setVisible] = useState(false);

	const showDialog = () => setVisible(true);
	const onNavigationLogin = () => {
		setVisible(false);
		navigation.navigate(constantes.page);
	}
	const onNavigation = () => {
		setVisible(false);
	}

	return (
		<Fragment>
			<View style={estilo.container}>
				<View style={estilo.header}>
					<Text style={estilo.title}>{constantes.title}</Text>
					<Text style={estilo.subTitle}>{constantes.subTitle}</Text>
				</View>
				<TouchableOpacity onPress={showDialog}>
					<Text style={estiloButton.submit}>{constantes.buttom}</Text>
				</TouchableOpacity>
			</View>
			<Alert 
				visible={visible} 
				yesFunction={onNavigationLogin} 
				noFunction={onNavigation} 
				dialogTitle={constantes.messages.status} 
				dialogFrase={constantes.messages.messages} 
			/>
		</Fragment>
	);

}

export default Inicio;