import React, { Fragment } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "../Inicio/estilo";
import estiloButton from "../../estilo";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react/cjs/react.development";
import loginApi from "../../services/api/Login/login_api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { constantes } from "./constantes";
import Alert from "../../Components/Alert/MessageAlert";

const Login = ({ navigation }) => {
	const [loginName, setLoginName] = useState('');
	const [password, setPassword] = useState('');
	const [mensagemErro, setMensagemErro] = useState('');
	const [visible, setVisible] = useState(false);
	const [token, setToken] = useState({})

	const hideDialog = async () => {
		setVisible(false);
		setLoginName('');
		setPassword('');
		await AsyncStorage.setItem(constantes.tokenOfficialName, token.official.official_name);
		await AsyncStorage.setItem(constantes.tokenLoginName, token.official.login_name);
		await AsyncStorage.setItem(constantes.tokenCategory, token.category);
		await AsyncStorage.setItem(constantes.tokenOfficialId, JSON.stringify(token.official.id));
		navigation.navigate('drawerStack', {name: token.official.official_name, loginName: token.official.login_name, category: token.category, id: token.official.id});
	}

	const tryValidateAccess = async () => {
		try {
			const token = await loginApi(loginName, password);
			await AsyncStorage.setItem(constantes.tokenName, token.token);
			setToken(token);
			sucessLogin();
		} catch (erro) {
			setMensagemErro(erro.message);
		}
	}

	const sucessLogin = () => {
		setVisible(true);
	}


	return (
		<Fragment>
			<View style={estilo.container}>
				<View style={estilo.header}>
					<Text style={estilo.title}>{constantes.title}</Text>
					<Text style={estilo.subTitle}>{constantes.subTitle}</Text>
				</View>
				<View style={estilo.input_container} >
					<FontAwesome5 name='envelope' size={30} style={{ marginRight: 40 }} />
					<TextInput
						style={estilo.input_text}
						placeholder={constantes.loginName.placeholder}
						autoCapitalize='none'
						onChangeText={(texto) => setLoginName(texto)}
						value={loginName}
					/>

				</View>
				<View style={estilo.input_container} >
					<Entypo name='lock' size={30} style={{ marginRight: 40 }} />
					<TextInput
						style={estilo.input_text}
						placeholder={constantes.password.placeholder}
						secureTextEntry={true}
						autoCapitalize='none'
						onChangeText={(texto) => setPassword(texto)}
						value={password}
					/>
				</View>
				<Text style={estilo.erros}>{mensagemErro}</Text>
				<TouchableOpacity onPress={tryValidateAccess}>
					<Text style={estiloButton.submit}>{constantes.buttom}</Text>
				</TouchableOpacity>
			</View>
			<Alert 
				visible={visible} 
				function={hideDialog} 
				dialogTitle={constantes.messages.status} 
				dialogFrase={constantes.messages.messages} 
				confirm={constantes.messages.confirm}
			/>
		</Fragment>
	);

}

export default Login;