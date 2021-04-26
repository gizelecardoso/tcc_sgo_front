
import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Dialog, Paragraph, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import returnOfficials from '../../services/api/Official/find_all_api';
import updateActivityWithOfficial from '../../services/api/Activity/update_api';
import { Picker } from '@react-native-picker/picker';
import ConfirmAlert from "../../Components/Alert/ConfirmAlert"; // yes or no
import estilo from '../../Views/Inicio/estilo';
import { Formik } from "formik";
import estiloButton from "../../estilo";

const Select = (props) => {
  const [officials, setOfficials] = useState([]);
  const [official, setOfficial] = useState({});
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  useEffect(() => {
    try {
      returnOfficials(setOfficials);
    } catch (erro) {
      setErrorMessage(erro.mensagem);
    }
  }, []);

  const saveOfficialToActivity = (values) => {
    updateActivityWithOfficial(props.activity, props.activity.id, values.official_id);
    props.noFunction();
  }

  const initialValues = {
		official_id: props.activity.official_id,
    official_name: props.item.official_name
	}

  return (
    <PaperProvider >
      <Portal>
        <Dialog
          style={{ alignItems: 'center' }}
          visible={props.visible}>
          <Dialog.Title>{props.dialogTitle}</Dialog.Title>
          <Dialog.Content>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                saveOfficialToActivity(values)
        
              }}
            >
              {({ values, setFieldValue, handleSubmit, isValid }) => (
                <View>
                  <Picker
                    style={estilo.item_edit}
                    selectedValue={values.official_name}
                    onValueChange={(itemValue, itemKey) => {
                      setFieldValue('official_id', itemKey)
                      setFieldValue('official_name', itemValue)
                    }}
                  >
                    <Picker.Item label='Selecione um funcionário' />
                    {
                      officials.map(official => {
                        return <Picker.Item label={official.official_name} value={official.official_name} key={official.id} />
                      })
                    }
                  </Picker>
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <Text style={estiloButton.submit}>Delegar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={props.noFunction} disabled={!isValid}>
                    <Text style={estiloButton.submit}>Fechar</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </Dialog.Content>
            {/* <View style={{ flexDirection: 'row' }}>
              <Dialog.Actions >
                <TouchableOpacity onPress={saveOfficialToActivity}>
                  <Text style={estilo.buttom}>SIM</Text>
                </TouchableOpacity>
              </Dialog.Actions>
              <Dialog.Actions>
                <TouchableOpacity onPress={props.noFunction}>
                  <Text style={estilo.buttom}>NÃO</Text>
                </TouchableOpacity>
              </Dialog.Actions>
            </View> */}
        </Dialog>
      </Portal>
    </PaperProvider>
  );

}

export default Select;

