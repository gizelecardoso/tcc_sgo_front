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
import createClerk from "../../services/api/Clerk/create_api";
import createAdmin from "../../services/api/Admin/create_api";
import createWorker from "../../services/api/Worker/create_api";
import returnClerk from "../../services/api/Clerk/find_all_api";

const CreateOfficial = ({ navigation }) => {
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [companies, setCompanies] = useState([]);
	const access = [{id: 1, name: 'Administrador'}, {id: 2, name: 'Encarregado'}, {id: 3, name: 'Oficial'}];
	const [visible, setVisible] = useState(false);
	const [companyDisable, setCompanyDisable] = useState(false);
	const [clerkDisable, setClerkDisable] = useState(false);
	const [clerks, setClerk] = useState([]);
	
	const hideDialog = () => {
		setVisible(false);
		navigation.push(constantes.mainList);
	}

	const tryCreateRelation = async (values, official) => {
		if (values.category == 'Encarregado')
			try{
				createClerk(values.companyId, official.id);
			} catch (erro){
				setErrorMessage(erro.mensagem);
			}
		else if (values.category == 'Administrador')
			try{
				createAdmin(official.id)
			} catch (erro){
				setErrorMessage(erro.mensagem);
			}
		else if (values.category == 'Oficial')
			try{
				createWorker(official.id, values.clerkId);
			} catch (erro){
				setErrorMessage(erro.mensagem);
			}
	}

	const tryCreate = async (values) => {
		try {
			const official = await createOfficial(values);
			tryCreateRelation(values, official)
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
		returnClerk(setClerk);
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
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Categorias</Text>
							<Picker
								style={estilo.input_text}
								onValueChange={handleChange('category') 
									// 	(itemValue) => {
									// 	if (itemValue == 'Encarregado'){
									// 		setCompanyDisable(false); 
									// 		setClerkDisable(true);
									// 	}
									// 	else if (itemValue == 'Oficial'){
									// 		setClerkDisable(false);
									// 		setCompanyDisable(true);
									// 	}
									// 	else if (itemValue == 'Administrador'){
									// 		setClerkDisable(true);
									// 		setCompanyDisable(true);
									// 	}
									// }
								}
							>
								{
									access.map(ac => {
										return <Picker.Item label={ac.name} value={ac.name} key={ac.id} />
									})
								}
							</Picker>
							</View>
							<View style={estilo.input_container} >
								<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Empresa</Text>
								<Picker
									style={estilo.item_select}
									onValueChange={handleChange('companyId')}
									disabled={companyDisable}
								>
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
									disabled={clerkDisable}
								>
									{
										clerks.map(clerk => {
											return <Picker.Item label={clerk.name} value={clerk.id} key={clerk.id} />
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