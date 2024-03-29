import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
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
import returnCompanies from "../../services/api/Company/find_all_api";
import returnClerks from "../../services/api/Official/find_all_api";

function select(values, setFieldValue, clerks) {
	if (values.clerkId == null) {
		return (
			<>
				<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Encarregado</Text>
				<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
					<Picker
						style={estilo.item_select}
						onValueChange={(itemValue) => {
							setFieldValue('clerkId', parseInt(itemValue, 10));
						}}
					>
						<Picker.Item label='Selecione' />
						{
							clerks.map(clerk => {
								return <Picker.Item label={clerk.official_name} value={clerk.id} key={clerk.id} />
							})
						}
					</Picker>
				</View>
			</>
		)
	} else {
		return (
			<>
				<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Encarregado</Text>
				<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
					<Picker
						style={estilo.item_select}
						selectedValue={values.clerkId}
						onValueChange={(itemValue) => {
							setFieldValue('clerkId', parseInt(itemValue, 10))
						}}
					>
						{
							clerks.map(clerk => {
								return <Picker.Item label={clerk.official_name} value={clerk.id} key={clerk.id} />
							})
						}
					</Picker>
				</View>
			</>
		)
	}
}

const UpdateOfficial = (props) => {
	const [roles, setRoles] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [companies, setCompanies] = useState([]);
	const [clerks, setClerk] = useState([]);
	const [visible, setVisible] = useState(false);

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryUpdate = async (values) => {
		try {
			await updateOfficial(values, props.route.params.item.id);
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
		returnCompanies(setCompanies);
		returnClerks(setClerk, 'encarregado');
	}, []);


	const initialValues = {
		officialCode: props.route.params.item.official_code,
		officialName: props.route.params.item.official_name,
		role: props.route.params.item.role_id,
		companyId: props.route.params.item.company_id,
		clerkId: props.route.params.item.clerk_id
	}

	return (
		<ScrollView>
			<Cabecalho title={constantes.titleUpdate} navigation={props.navigation} page={constantes.mainList} />
			<Formik
				validationSchema={fieldsValidation}
				initialValues={initialValues}
				onSubmit={async (values, { resetForm }) => {
					await tryUpdate(values)
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
						<View style={estilo.input_container} >
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>Empresa</Text>
							<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
								<Picker
									style={estilo.item_select}
									selectedValue={values['companyId']}
									onValueChange={(itemValue) => {
										setFieldValue('companyId', itemValue)
									}}
								//onValueChange={handleChange('companyId')}
								>
									{
										companies.map(company => {
											return <Picker.Item label={company.company_name} value={company.id} key={company.id} />
										})
									}
								</Picker>
							</View>
							{ select(values, setFieldValue, clerks) }
							{/* <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Encarregado</Text>
							<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
								<Picker
									style={estilo.item_select}
									selectedValue={values['clerkId']}
									onValueChange={(itemValue) => {
										setFieldValue('clerkId', itemValue)
									}}
								>
									{
										clerks.map(clerk => {
											return <Picker.Item label={clerk.official_name} value={clerk.id} key={clerk.id} />
										})
									}
								</Picker>
							</View> */}
						</View>
						<View style={estilo.input_container} >
							<Text style={{ fontSize: 15, fontWeight: 'bold' }}>{constantes.role.title}</Text>
							<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
								<Picker
									style={estilo.input_text}
									selectedValue={values[constantes.role.name]}
									onValueChange={(itemValue) => {
										setFieldValue(constantes.role.name, itemValue)
									}}
								//onValueChange={handleChange(constantes.role.name)}
								>
									{
										roles.map(role => {
											return <Picker.Item label={role.role_name} value={role.id} key={role.id} />
										})
									}
								</Picker>
							</View>
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

		</ScrollView>
	);

}

export default UpdateOfficial;