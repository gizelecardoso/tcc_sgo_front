import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import create from "../../services/api/Role/role_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import { Picker } from "@react-native-picker/picker";

const CreateRole = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);
	const access = [{ id: 1, name: 'administrador' }, { id: 2, name: 'encarregado' }, { id: 3, name: 'oficial' }]

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryCreate = async (values) => {
		try {
			await create(values);
			sucessCreate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const sucessCreate = () => {
		setVisible(true);
	}

	return (
		<ScrollView>
			<Cabecalho title={constantes.titleCreate} navigation={props.navigation} page={constantes.mainList} />
			<Formik
				validationSchema={fieldsValidation}
				initialValues={constantes.initialValues}
				onSubmit={async (values, { resetForm }) => {
					await tryCreate(values)
					resetForm()
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, setFieldValue }) => (
					<View style={estilo.container}>
						<InputValues
							title={constantes.code.title}
							name={constantes.code.name}
							placeholder={constantes.code.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.code.attribute]}
							touched={touched[constantes.code.attribute]}
							values={values[constantes.code.attribute]}
						/>
						<InputValues
							title={constantes.name.title}
							name={constantes.name.name}
							placeholder={constantes.name.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.name.attribute]}
							touched={touched[constantes.name.attribute]}
							values={values[constantes.name.attribute]}
						/>
						<InputValues
							title={constantes.description.title}
							name={constantes.description.name}
							placeholder={constantes.description.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.description.attribute]}
							touched={touched[constantes.description.attribute]}
							values={values[constantes.description.attribute]}
						/>
						<View style={estilo.input_container} >
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Categorias</Text>
							<Picker
								style={estilo.input_text}
								selectedValue={values.roleCategory}
								onValueChange={(itemValue) => {
									setFieldValue('roleCategory', itemValue)
								}}
							>
								<Picker.Item label='Selecione uma categoria'/>
								{
									access.map(ac => {
										return <Picker.Item label={ac.name} value={ac.name} key={ac.id} />
									})
								}
							</Picker>
						</View>
						<Text style={estilo.erros}>{errorMessage}</Text>
						<TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
							<Text style={estiloButton.submit}>{constantes.buttom}</Text>
						</TouchableOpacity>
					</View>
				)}

			</Formik>
			<Alert 
				visible={visible} 
				function={hideDialog} 
				dialogTitle={constantes.messages.status} 
				dialogFrase={constantes.messages.createMessage} 
				confirm={constantes.messages.confirm}
			/>
		</ScrollView>
	);

}

export default CreateRole;