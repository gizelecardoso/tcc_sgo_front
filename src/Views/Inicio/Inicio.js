import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import estilo from "../Inicio/estilo";
import estiloButton from "../../estilo";
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import { constantes } from './constantes';

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
			
			<PaperProvider>
				<Portal>
					<Dialog
						visible={visible}>
						<Dialog.Title>Alert</Dialog.Title>
						<Dialog.Content>
							<Paragraph>Gostaria de ir para a próxima página</Paragraph>
						</Dialog.Content>
						<Dialog.Actions>
							<Button onPress={onNavigationLogin}>Sim</Button>
						</Dialog.Actions>
						<Dialog.Actions>
							<Button onPress={onNavigation}>Não</Button>
						</Dialog.Actions>
					</Dialog>
				</Portal>
			</PaperProvider>
			
		</Fragment>
	);

}

export default Inicio;