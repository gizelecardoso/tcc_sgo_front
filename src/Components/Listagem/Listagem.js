import React, { Fragment, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import estilo from "./estilo";
import estiloInput from "../../Views/Role/estilo";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ConfirmAlert from "../../Components/Alert/ConfirmAlert"; // yes or no
import MessageAlert from "../../Components/Alert/MessageAlert"; // continue - sucesso

const Listagem = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const name = props.listName;
	const [visibleMessage, setVisibleMessage] = useState(false);
	const [visibleConfirm, setVisibleConfirm] = useState(false);
	const [itemId, setItemId] = useState(0);

	const showDialog = (item) => {
		setVisibleConfirm(true);
		setItemId(item);
	}

	const hideDialog = () => {
		setVisibleConfirm(false);
	}

	const deleteData = () => {
		try {
			props.deleteFunction(itemId);
			sucessDelete();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}
	
	const sucessDelete = () => {
		setVisibleMessage(true);
	}
	
	const hideDialogContinue = () => {
		setVisibleMessage(false);
		props.navigation.push(props.delete);
	}

	return (
		<Fragment>
			<FlatList
				data={props.lista}
				keyExtractor={(item) => item.id.toString()}
				renderItem={
					({ item }) => (
						<View style={estilo.linha_lista}>
							<View style={estilo.linha_lista}>
								<AntDesign name="checksquareo" size={24} color="black" />
								<Text style={estiloInput.input_text}>{item[name]}</Text>
							</View>
							<View style={estilo.linha_lista}>
								<TouchableOpacity onPress={() => {
									props.navigation.push(props.update, item);
								}
								}>
									<FontAwesome name="edit" size={24} color="black" />
								</TouchableOpacity>
								<TouchableOpacity onPress={() => {showDialog(item.id)}}>
									<FontAwesome name="trash" size={24} color="black" />
								</TouchableOpacity>
							</View>
						</View>
					)
				}
			/>
			<ConfirmAlert
				visible={visibleConfirm}
				yesFunction={deleteData}
				noFunction={hideDialog}
				dialogTitle= 'Deletar!!!!!!'
				dialogFrase='Tem certeza que quer deletar esse dado ?'
			/>
			<MessageAlert
				visible={visibleMessage}
				function={hideDialogContinue}
				dialogTitle='Deletado'
				dialogFrase='Dado deletado com Sucesso !'
				confirm='Continue'
			/>
		</Fragment>

	);
}

export default Listagem;