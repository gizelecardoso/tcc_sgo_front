import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Button } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues";
import create from "../../services/api/Activity/create_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import { Picker } from "@react-native-picker/picker";
import DatePicker from 'react-native-datepicker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import InputDate from "../../Components/Input/InputDate";

const CreateRole = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);
	const [date, setDate] = useState('');
	const [show, setShow] = useState(false);

	const showDatepicker = () => {
		setShow(true);
	};

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryCreate = async (values) => {
		try {
			await create(values, 'nova');
			sucessCreate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const sucessCreate = () => {
		setVisible(true);
	}

	const formatDate = (date) => {
    return `${date.getDate()}/${date.getMonth() +
      1}/${date.getFullYear()}`;
  };

	return (
		<ScrollView>
			<Cabecalho title={constantes.titleCreate} navigation={props.navigation} page={constantes.mainList} />
			<Formik
				validationSchema={fieldsValidation}
				initialValues={constantes.initialValues}
				onSubmit={async (values, { resetForm }) => {
					console.log(values);
					const dateNow = new Date();
					const dateNowFormat = moment(dateNow).format();
					if (values.expectedFinalDate < values.expectedInitialDate) {
						setErrorMessage('Data Final não pode ser menor que Data Inicial');
					} else if (values.expectedInitialDate < dateNowFormat) {
						setErrorMessage('Data Inicial não pode ser menor que Data de Hoje');
					} else {
						await tryCreate(values)
						resetForm()
					}
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
						<InputDate
							title={constantes.expectedInitialDate.title}
							name={constantes.expectedInitialDate.name}
							values={values[constantes.expectedInitialDate.attribute]}
							handleChange={handleChange}
							setFieldValue={setFieldValue}
						/>
						<InputDate
							title={constantes.expectedFinalDate.title}
							name={constantes.expectedFinalDate.name}
							values={values[constantes.expectedFinalDate.attribute]}
							handleChange={handleChange}
							setFieldValue={setFieldValue}
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
		</ScrollView>
	);

}

export default CreateRole;