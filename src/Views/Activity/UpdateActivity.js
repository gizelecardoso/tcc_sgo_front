import React, { Fragment, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import update from "../../services/api/Activity/update_api";
import returnActivityItems from "../../services/api/ActivityItem/find_all_api";
import deleteItem from "../../services/api/ActivityItem/delete_api";
import createItem from "../../services/api/ActivityItem/create_api";
import updateItem from "../../services/api/ActivityItem/update_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "../estilo";
import estiloUnico from "./estilo";
import estiloButton from "../../estilo";
import Alert from "../../Components/Alert/MessageAlert";
import { Picker } from "@react-native-picker/picker";
import moment from "moment";
import { Listagem } from "../../Components/Listagem";
import { AntDesign } from '@expo/vector-icons';
import UpdateActivityItem from "../../Components/Alert/ItemActivity/UpdateActivityItem"; // continue - sucesso
import returnOfficials from "../../services/api/Official/find_all_api";
import returnOfficial from "../../services/api/Official/find_by_id";

function select(values, setFieldValue, officials, official, editable) {
	if (editable) {
		if (values.officialId == null) {
			return (
				<View style={estilo.input_container} >
					<Text style={{ fontSize: 15, fontWeight: 'bold' , justifyContent: 'flex-start'}}>Funcionários</Text>
					<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50  }}>
						<Picker
							itemStyle={estilo.item_select}
							style={estilo.item_select}
							onValueChange={(itemValue) => {
								setFieldValue('officialId', itemValue)
								setFieldValue('activityStatus', 'pendente')
							}}
						>
							<Picker.Item label='Selecione' />
							{
								officials.map((
									official, index) => {
										return <Picker.Item label={official.official_name} value={official.id} key={index} />
									})
							}
						</Picker>
					</View>
				</View>		)
		} else {
			officials.push(official);
			return (
				<View style={estilo.input_container} >
					<Text style={{ fontSize: 15, fontWeight: 'bold'  , justifyContent: 'flex-start'}}>Funcionários</Text>
					<View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50  }}>
						<Picker
							itemStyle={estilo.item_select}
							style={estilo.item_select}
							selectedValue={values.officialId}
							onValueChange={(itemValue) => {
								setFieldValue('officialId', itemValue)
								setFieldValue('activityStatus', 'pendente')
							}}
						>
						{
								officials.map((
									official, index) => {
										return <Picker.Item label={official.official_name} value={official.id} key={index} />
									})
							}
						</Picker>
					</View>
				</View>
			)
		}
	}
}


function displayCreateItem(editable, values, setFieldValue, officials, setVisibleUpdate) {
	if (editable) {
		return (
			<Fragment>
				{/* { select(values, setFieldValue, officials, editable)} */}
				<TouchableOpacity onPress={() => setVisibleUpdate(true)}>
					<Text style={estiloUnico.submit}>Adicionar Item</Text>
				</TouchableOpacity>
			</Fragment>
		)
	}
}

function setStatusUpdate(status, setStart, setStop, setFinish) {
	if (status === 'pendente'){
		setStart(true);
	} else if(status === 'executando' || status === 'atrasada') {
		setStart(false);
		setStop(true);
		setFinish(true);
	} else if(status === 'pausada') {
		setStart(true);
		setStop(false);
		setFinish(false);
	} else {
		setStart(false);
		setStop(false);
		setFinish(false);
	}
}

function displayUpdateActivity(editable, handleSubmit, isValid, start, stop, finish, values, update) {
	const date = new Date().getDate();
	if (editable) {
		return (
			<TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
				<Text style={estiloButton.submit}>{constantes.buttomAtualizar}</Text>
			</TouchableOpacity>
		)
	} else {
		return (
			<View style={{ flexDirection: 'column' , alignItems: 'center'}}>
				<TouchableOpacity onPress={() => { update(values, values.valueId, 'executando', date) }} disabled={!start}>
					<Text style={start === true ? estiloUnico.buttonStart: estiloUnico.disabled}>Iniciar</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => { update(values, values.valueId, 'finalizada', date) }} disabled={!finish}>
						<Text style={finish === true ? estiloUnico.buttonFinish: estiloUnico.disabled}>Finalizar</Text>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => { update(values, values.valueId, 'pausada', date) }} disabled={!stop}>
						<Text style={stop === true ? estiloUnico.buttonStop: estiloUnico.disabled}>Parar</Text>
					</TouchableOpacity>
				</View>
			</View>
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
	const [start, setStart] = useState(false);
	const [stop, setStop] = useState(false);
	const [finish, setFinish] = useState(false);

	const hideDialog = () => {
		setVisible(false);
		props.navigation.push(constantes.mainList);
	}

	const tryUpdate = async (values) => {
		try {
			await update(values, props.route.params.item.id, values.activityStatus);
			sucessUpdate();
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

	const updateStatus = async (values, id, status) => {
		await update(values, id, status);
		props.navigation.push('Activities');
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
		stoppedDate: props.route.params.item.stopped_date
	}

	useEffect(() => {
		returnActivityItems(setActivityItems, props.route.params.item.id);
		returnOfficials(setOfficials, 'activity');
		if(props.route.params.item.official_id){
			returnOfficial(setOfficial, props.route.params.item.official_id);
			// officials.push(official);
		}
	}, []);

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
						{ select(values, setFieldValue, officials, official, props.route.params.delegate)}
						{	displayCreateItem(props.route.params.editable, values, setFieldValue, officials, setVisibleUpdate)}

						<View style={estiloUnico.lista_items}>
							< Listagem
								lista={activityItems}
								itemActivity={true}
								navigation={props.navigation}
								listName={'item_name'}
								updateData={updateItem}
								delete={'Activities'}
								deleteFunction={deleteItem}
								hideDialogUpdate={hideDialogUpdate}
								activities={returnActivities}
								displayEditItens={!(props.route.params.editable)}
							/>
						</View>
						{ setStatusUpdate(values.activityStatus, setStart, setStop, setFinish) }
						{ displayUpdateActivity(
								props.route.params.editable, 
								handleSubmit, 
								isValid,
								start,
								stop,
								finish,
								values,
								updateStatus)}

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