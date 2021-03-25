import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import create from "../../services/api/Company/create_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";

const CreateCompany = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);
	
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
		<Fragment>
			<Cabecalho title={constantes.titleCreate} navigation={props.navigation} page={constantes.mainList} />
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
						<InputValues
							title={constantes.branch.title}
							name={constantes.branch.name}
							placeholder={constantes.branch.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.branch.attribute]}
							touched={touched[constantes.branch.attribute]}
							values={values[constantes.branch.attribute]}
						/>
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

export default CreateCompany;