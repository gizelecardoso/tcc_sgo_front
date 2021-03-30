import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { Cabecalho } from "../../Components/Cabecalho";
import updateOfficial from "../../services/api/Official/update_api";
import returnRoles from "../../services/api/Role/roles_api.js";
import InputValues from "../../Components/Input/InputValues.js";
import { constantes } from "./constantes";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import ClerkAlert from "../../Components/Alert/ClerkAlert";

const UpdateOfficial = (props) => {
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const access = [{id: 1, name: 'Administrador'}, {id: 2, name: 'Encarregado'}, {id: 3, name: 'Oficial'}]
	const [selectedValue, setSelectedValue] = useState('Administrador');
	
	const [visible, setVisible] = useState(false);
	const [clerkVisible, setClerkVisible] = useState(false);

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryUpdate = async (values) => {
		try {
			await updateOfficial(values, props.route.params.id);
			sucessUpdate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}
	
	const sucessUpdate = () => {
		setVisible(true);
	}

	useEffect(() => {
		returnRoles(setRoles);
	}, []);

	//return company

	//return clerk

	const initialValues = {
		officialCode: props.route.params.official_code,
		officialName: props.route.params.official_name,
		role: props.route.params.role_id
	}

	return (
		<Fragment>
			<Cabecalho title={constantes.titleUpdate} navigation={props.navigation} page={constantes.mainList} />
			<Formik
				validationSchema={fieldsValidation}
				initialValues={initialValues}
				onSubmit={async (values, { resetForm }) => {
					await tryUpdate(values)
					resetForm()
				}}
			>
				{({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
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
						<View style={estilo.input_container} >
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Níveis de Acesso</Text>
							<Picker
								selectedValue={selectedValue}
								style={estilo.input_text}
								onValueChange={
									(itemValue) => {
										setSelectedValue(itemValue);
										setClerkVisible(true);
									}}
							>
								{
									access.map(ac => {
										return <Picker.Item label={ac.name} value={ac.name} key={ac.id} />
									})
								}
							</Picker>
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>{constantes.role.title}</Text>
							<Picker
								style={estilo.input_text}
								selectedValue={values[constantes.role.name]}
								onValueChange={handleChange(constantes.role.name)}
							>
								{
									roles.map(role => {
										return <Picker.Item label={role.role_name} value={role.id} key={role.id} />
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
				dialogFrase={constantes.messages.updateMessage}
				confirm={constantes.messages.confirm}
			/>
			<ClerkAlert
				visible={clerkVisible}
				hide={(hideDialog)}
				dialogTitle={selectedValue}
				confirm={constantes.messages.confirm}
				official_id={props.route.params.id}
			/>
		</Fragment>
	);

}

export default UpdateOfficial;