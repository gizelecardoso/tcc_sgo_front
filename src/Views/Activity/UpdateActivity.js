import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import update from "../../services/api/Activity/update_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";

const UpdateActivity = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryUpdate = async (values) => {
		try {
			await update(values, props.route.params.id);
			sucessUpdate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const sucessUpdate = () => {
		setVisible(true);
	}

	const format_date_back_to_front = (date_api) => {
		return moment(date_api).format('L');
	}

	const initialValues = {
		activityCode: props.route.params.activity_code,
    activityName: props.route.params.activity_name, 
    activityDescription: props.route.params.activity_description,
    expectedInitialDate: format_date_back_to_front(props.route.params.expected_initial_date),
    expectedFinalDate: format_date_back_to_front(props.route.params.expected_final_date)
	}

	useEffect(() => {
		console.log(props);
	})

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
						<InputValues
							title={constantes.expectedInitialDate.title}
							name={constantes.expectedInitialDate.name}
							placeholder={constantes.expectedInitialDate.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.expectedInitialDate.attribute]}
							touched={touched[constantes.expectedInitialDate.attribute]}
							values={values[constantes.expectedInitialDate.attribute]}
						/>
						<InputValues
							title={constantes.expectedFinalDate.title}
							name={constantes.expectedFinalDate.name}
							placeholder={constantes.expectedFinalDate.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.expectedFinalDate.attribute]}
							touched={touched[constantes.expectedFinalDate.attribute]}
							values={values[constantes.expectedFinalDate.attribute]}
						/>
						<TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
							<Text style={estiloButton.submit}>{constantes.buttomAtualizar}</Text>
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
		</Fragment>
	);

}

export default UpdateActivity;