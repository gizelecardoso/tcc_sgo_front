import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import create from "../../services/api/Activity/create_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import DatePicker from 'react-datepicker';
import Date from '../../Components/Date';
import "react-datepicker/dist/react-datepicker.css";
import { date } from "yup/lib/locale";

const CreateRole = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	
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
							touched={<DatePicker selected={startDate} onChange={date => setStartDate(date)} showTimeSelect dateFormat="Pp" />}
							values={values[setStartDate(date)]}
						/>
						<InputValues
							title={constantes.expectedInitialDate.title}
							name={constantes.expectedInitialDate.name}
							placeholder={constantes.expectedInitialDate.placeholder}
							handleChange={handleChange}
							handleBlur={handleBlur}
							errors={errors[constantes.expectedInitialDate.attribute]}
							touched={<DatePicker selected={endDate} onChange={date => setEndDate(date)} showTimeSelect dateFormat="Pp" />}
							values={values[setStartDate(date)]}
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