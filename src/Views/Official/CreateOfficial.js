import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Picker } from "@react-native-picker/picker";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import createOfficial from "../../services/api/Official/create_api";
import returnRoles from "../../services/api/Role/roles_api";
import { constantes } from "./constantes";
import fieldsValidation from "./validation";
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import returnCompanies from "../../services/api/Company/find_all_api";
import returnClerks from "../../services/api/Official/find_all_api";

const CreateOfficial = ({ navigation }) => {
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [companies, setCompanies] = useState([]);
	const [clerks, setClerk] = useState([]);
	const [visible, setVisible] = useState(false);
	
	const hideDialog = () => {
		setVisible(false);
		navigation.push(constantes.mainList);
	}

	const tryCreate = async (values) => {
		try {
			await createOfficial(values);
			sucessCreate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const sucessCreate = () => {
		setVisible(true);
	}

	useEffect(() => {
		returnRoles(setRoles);
	}, []);

	useEffect(() => {
		returnCompanies(setCompanies);
	}, []);

	useEffect(() => {
		returnClerks(setClerk, 'encarregado');
	}, []);

	return (
		<Fragment>
			<Cabecalho title={constantes.titleCreate} navigation={navigation} page={constantes.mainList} />
			<Formik
				validationSchema={fieldsValidation}
				initialValues={constantes.initialValues}
				onSubmit={async (values, { resetForm }) => {
					await tryCreate(values)
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
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Empresa</Text>
								<Picker
									style={estilo.item_select}
									onValueChange={handleChange('companyId')}								
								>
									<Picker.Item label='Selecione uma empresa'/>
									{
										companies.map(company => {
											return <Picker.Item label={company.company_name} value={company.id} key={company.id} />
										})
									}
								</Picker>
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Encarregado</Text>
								<Picker
									style={estilo.item_select}
									onValueChange={handleChange('clerkId')}
								>
									<Picker.Item label='Selecione um encarregado'/>
									{
										clerks.map(clerk => {
											return <Picker.Item label={clerk.official_name} value={clerk.id} key={clerk.id} />
										})
									}
								</Picker>
						</View>
						<View style={estilo.input_container} >
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>{constantes.role.title}</Text>
							<Picker
								style={estilo.input_text}
								onValueChange={handleChange(constantes.role.name)}
							>
								<Picker.Item label='Selecione uma função'/>
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
				dialogFrase={constantes.messages.createMessage} 
				confirm={constantes.messages.confirm}
			/>
		</Fragment>
	);

}

export default CreateOfficial;