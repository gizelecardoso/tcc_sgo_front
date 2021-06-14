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
  const [officials, setOfficials] = useState([]);

  useEffect(() => {
    if (props.category == 'encarregado'){
      if (props.values.officialId){
        returnOfficials(setOfficials, 'delegate', props.officialId, props.values.officialId);
      } else {
        returnOfficials(setOfficials, 'activityClerk', props.officialId);
      }
    } else {
      if (props.values.officialId){
        returnOfficials(setOfficials, 'delegate', null, props.values.officialId);
      } else {
        returnOfficials(setOfficials, 'activity');
      }
    }
  }, []);

  return (
    <ScrollView>
      { select(props.values, props.setFieldValue, officials, true)}
    </ScrollView>
  );

}

export default DelegateActivity;