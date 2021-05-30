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
import verifyItens from "../../services/api/ActivityItem/find_all_api";
import ButtonsUpdateActivity from "./ButtonsUpdateActivity";

function select(values, setFieldValue, officials, editable) {
  console.warn(officials)
  if (editable) {
    if (values.officialId == null) {
      return (
        <View style={estilo.input_container} >
          <Text style={{ fontSize: 15, fontWeight: 'bold', justifyContent: 'flex-start' }}>Funcionários</Text>
          <View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
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
                  official) => {
                  return <Picker.Item label={official.official_name} value={official.id} key={official.id} />
                })
              }
            </Picker>
          </View>
        </View>)
    } else {
      console.warn('tem oficial')
      return (
        <View style={estilo.input_container} >
          <Text style={{ fontSize: 15, fontWeight: 'bold', justifyContent: 'flex-start' }}>Funcionários</Text>
          <View style={{ borderRadius: 10, backgroundColor: "lightgray", height: 50 }}>
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
                  official) => {
                  return <Picker.Item label={official.official_name} value={official.id} key={official.id} />
                })
              }
            </Picker>
          </View>
        </View>
      )
    }
  }
}

const DelegateActivity = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [visible, setVisible] = useState(false);
  const [visibleMessage, setVisibleMessage] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [activityItems, setActivityItems] = useState([]);
  const [officials, setOfficials] = useState([]);
  const [official, setOfficial] = useState({});
  const [listOfficial, setListOfficial] = useState([]);
  const [status, setStatus] = useState('');
  const [countActivityItems, setCountActivityItems] = useState([]);

  // const listOfficialFunc = () => {
  //   console.warn('officials')
  //   console.warn(officials)
  //   setListOfficial(officials);
  // }

  // const pushList = () => {
  //   console.warn('list')
  //   console.warn(listOfficial)
  //   console.warn('official')
  //   console.warn(official)
  //   listOfficial.push(official);
  //   console.warn(listOfficial)

  //   setListOfficial(prevState => ({
  //     officials: []
  //   }))
  // }

  useEffect(() => {
    returnOfficials(setOfficials, 'delegate', props.officialId);
    // if (props.officialId) {
    //   returnOfficial(setOfficial, props.officialId);
    // }
    // listOfficialFunc();
    // pushList();
    // console.warn('useEffect')
    // console.warn(listOfficial)
  }, []);

  return (
    <ScrollView>
      { select(props.values, props.setFieldValue, officials, true)}
    </ScrollView>
  );

}

export default DelegateActivity;