import React, { Fragment, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import estilo from "./estilo";
import estiloInput from "../../Views/estilo";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import ConfirmAlert from "../../Components/Alert/ConfirmAlert"; // yes or no
import MessageAlert from "../../Components/Alert/MessageAlert"; // continue - sucesso
import UpdateActivityItem from "../../Components/Alert/ItemActivity/UpdateActivityItem"; // continue - sucesso

function displayActivity(display, navigation, update, item) {
	if (display) {
		return (
			<TouchableOpacity onPress={() => { navigation.push(update, { item, editable: false }) }}>
				<AntDesign name="eye" size={24} color="black" />
			</TouchableOpacity>
		)
	}
}

function displayUpdateAndDelete(display, itemActivity, navigation, update, item, name, showDialog, updateNameItem) {
	if (!display) {
		return (
			<Fragment>
				<TouchableOpacity
					onPress={() => {
						if (itemActivity) {
							updateNameItem(item[name], item.id);
						}
						else {
							navigation.push(update, { item, editable: true });
						}
					}
					}>
					<FontAwesome name="edit" size={24} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => { showDialog(item.id) }}>
					<FontAwesome name="trash" size={24} color="black" />
				</TouchableOpacity>
			</Fragment>
		)
	}
}

const Listagem = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const name = props.listName;
	const [visibleMessage, setVisibleMessage] = useState(false);
	const [visibleConfirm, setVisibleConfirm] = useState(false);
	const [visibleUpdate, setVisibleUpdate] = useState(false);
	const [itemId, setItemId] = useState(0);
	const [itemUpdate, setItemUpdate] = useState('');

	const showDialog = (item) => {
		setVisibleConfirm(true);
		setItemId(item);
	}

	const updateNameItem = (item, itemIdUpdate) => {
		setVisibleUpdate(true);
		setItemUpdate(item);
		setItemId(itemIdUpdate);
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
		if (props.itemActivity) {
			setVisibleMessage(false);
			setVisibleConfirm(false);
			props.activities();
		} else {
			setVisibleMessage(false);
			props.navigation.push(props.delete);
		}
	}

	const hideDialogUpdate = () => {
		setVisibleUpdate(false);
		props.activities();
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
								{ displayActivity(props.displayActivity, props.navigation, props.update, item) }

								{ displayUpdateAndDelete(props.displayEditItens, props.itemActivity, props.navigation, props.update, item, name, showDialog, updateNameItem) }
							</View>
						</View>
					)
				}
			/>
			<ConfirmAlert
				visible={visibleConfirm}
				yesFunction={deleteData}
				noFunction={hideDialog}
				dialogTitle='Deletar!!!!!!'
				dialogFrase='Tem certeza que quer deletar esse dado ?'
			/>
			<MessageAlert
				visible={visibleMessage}
				function={hideDialogContinue}
				dialogTitle='Deletado'
				dialogFrase='Dado deletado com Sucesso !'
				confirm='Continue'
			/>
			<UpdateActivityItem
				visible={visibleUpdate}
				itemName={itemUpdate}
				itemId={itemId}
				navigation={props.navigation}
				yesFunction={props.updateData}
				noFunction={hideDialogUpdate}
				dialogTitle='Item da Atividade'
			/>
		</Fragment>

	);
}

export default Listagem;