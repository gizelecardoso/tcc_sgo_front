import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import update from "../../services/api/Activity/update_api";
import returnActivityItems from "../../services/api/ActivityItem/find_all_api";
import deleteItem from "../../services/api/ActivityItem/delete_api";
import updateItem from "../../services/api/ActivityItem/update_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloUnico from "./estilo";
import Alert from "../../Components/Alert/MessageAlert";
import moment from "moment";
import { Listagem } from "../../Components/Listagem";
import UpdateActivityItem from "../../Components/Alert/ItemActivity/UpdateActivityItem"; // continue - sucesso
import returnOfficials from "../../services/api/Official/find_all_api";
import returnOfficial from "../../services/api/Official/find_by_id";
import verifyItens from "../../services/api/ActivityItem/find_all_api";
import ButtonsUpdateActivity from "./ButtonsUpdateActivity";
import DelegateActivity from "./DelegateActivity";

function displayCreateItem(editable, setVisibleUpdate) {
	if (editable) {
		return (
			<Fragment>
				<TouchableOpacity onPress={() => setVisibleUpdate(true)}>
					<Text style={estiloUnico.submit}>Adicionar Item</Text>
				</TouchableOpacity>
			</Fragment>
		)
	}
}

function displayEvolution(values) {
	return (
		<View style={estiloUnico.mainEvolution}>
			<Text style={estiloUnico.textEvolution}>Evolução:</Text>
			<Text style={estiloUnico.percentEvolution}>{Math.round(values.evolution)}%</Text>
		</View>
	)
}

function delegateActivity(values, setFieldValue, officialId, navigation, delegate) {
	if (delegate) {
		return (
			<DelegateActivity
				values={values}
				setFieldValue={setFieldValue}
				officialId={officialId}
				navigation={navigation}
			/>
		)
	}
}

const UpdateActivity = (props) => {
	const [errorMessage, setErrorMessage] = useState('');
	const [visible, setVisible] = useState(false);
	const [visibleMessage, setVisibleMessage] = useState(false);
	const [visibleUpdate, setVisibleUpdate] = useState(false);
	const [activityItems, setActivityItems] = useState([]);
	const [officials, setOfficials] = useState([]);
	const [official, setOfficial] = useState({});
	const [status, setStatus] = useState('');
	const [countActivityItems, setCountActivityItems] = useState([]);

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryUpdate = async (values) => {
		try {
			await update(values, props.route.params.item.id, values.activityStatus, props.route.params.item.official_id);
			sucessUpdate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const updateStatus = async (values, id, status) => {
		await update(values, id, status);
		props.navigation.navigate('Activities');
	}

	const sucessUpdate = () => {
		setVisible(true);
	}

	const format_date_back_to_front = (date_api) => {
		return moment(date_api).format('L');
	}

	const hideDialogUpdate = () => {
		setVisibleUpdate(false);
		returnActivities();
	}

	const returnActivities = () => {
		returnActivityItems(setActivityItems, props.route.params.item.id);
	}

	const initialValues = {
		valueId: props.route.params.item.id,
		activityCode: props.route.params.item.activity_code,
		activityName: props.route.params.item.activity_name,
		activityDescription: props.route.params.item.activity_description,
		expectedInitialDate: format_date_back_to_front(props.route.params.item.expected_initial_date),
		expectedFinalDate: format_date_back_to_front(props.route.params.item.expected_final_date),
		officialId: props.route.params.item.official_id,
		activityStatus: props.route.params.item.activity_status,
		editable: props.route.params.editable,
		initialDate: props.route.params.item.initial_date,
		finalDate: props.route.params.item.final_date,
		stoppedDate: props.route.params.item.stopped_date,
		evolution: props.route.params.item.evolution
	}

	useEffect(() => {
		returnActivityItems(setActivityItems, props.route.params.item.id);
		returnOfficials(setOfficials, 'activity');
		if (props.route.params.item.official_id) {
			returnOfficial(setOfficial, props.route.params.item.official_id);
		}
		verifyItens(setCountActivityItems, props.route.params.item.id, true)
	}, []);

	return (
		<ScrollView>
			<Cabecalho title={constantes.titleUpdate} navigation={props.navigation} page={constantes.mainList}/>
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
							editable={values.editable}
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
							editable={values.editable}
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
							editable={values.editable}
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
							editable={values.editable}
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
							editable={values.editable}
						/>
						{ delegateActivity(values, setFieldValue, props.route.params.item.official_id, props.navigation, props.route.params.delegate) }
						{	displayCreateItem(props.route.params.editable, setVisibleUpdate)}

						<View style={estiloUnico.lista_items}>
							< Listagem
								lista={activityItems}
								activityId={values.valueId}
								itemActivity={true}
								navigation={props.navigation}
								listName={'item_name'}
								updateData={updateItem}
								delete={'Activities'}
								deleteFunction={deleteItem}
								hideDialogUpdate={hideDialogUpdate}
								activities={returnActivities}
								statusItem={true}
								displayEditItens={!(props.route.params.editable)}
							/>
						</View>
						{ displayEvolution(values)}
						<ButtonsUpdateActivity
							editable={props.route.params.editable}
							handleSubmit={handleSubmit}
							isValid={isValid}
							values={values}
							updateStatus={updateStatus}
							delegate={props.route.params.delegate}
							activityStatus={values.activityStatus}
							evolution={values.evolution}
							navigation={props.navigation}
						/>
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
			<UpdateActivityItem
				visible={visibleUpdate}
				activityId={props.route.params.item.id}
				create={true}
				navigation={props.navigation}
				noFunction={hideDialogUpdate}
				dialogTitle='Item da Atividade'
			/>
		</ScrollView>
	);

}

export default UpdateActivity;