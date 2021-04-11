import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Dialog, Paragraph, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import estilo from '../../../Views/Inicio/estilo';
import createItem from "../../../services/api/ActivityItem/create_api";
import updateItem from "../../../services/api/ActivityItem/update_api";

const UpdateActivityItem = (props) => {
  const [itemName, setItemName] = useState('');

  useEffect(() => {
    if(props.item){
      setItemName(props.item.item_name);
    } else {
      setItemName('');
    }
  }, []);

  const tryCreateActivityItems = async() => {
    if(props.create){
      console.log(itemName);
      await createItem(itemName, props.activityId, 'pendente');
      <Text>Item criado com Sucesso</Text>
      props.navigation.push('UpdateActivity');
    }else{
      await updateItem(itemName, props.activityId, 'pendente');
      <Text>Item atualizado com Sucesso</Text>
      props.navigation.push('UpdateActivity');
    }
		try {
		} catch (erro) {
			setErrorMessage(erro.mensagem);
		}
	}

  return (
    <PaperProvider >
      <Portal>
        <Dialog
          style={{ alignItems: 'center' }}
          visible={props.visible}>
          <Dialog.Title>{props.dialogTitle}</Dialog.Title>
          <Dialog.Content>
            <Text style={{fontSize:15, fontWeight:'bold'}}>Nome do Item da Atividade</Text>
            <TextInput style={estilo.input_text, {borderWidth: 1}}
              defaultValue={itemName}
              onChangeText={(item) => setItemName(item)}
            />
          </Dialog.Content>
          <View style={{ flexDirection: 'row' }}>
            <Dialog.Actions >
              <TouchableOpacity onPress={tryCreateActivityItems}>
                <Text style={estilo.buttom}>SIM</Text>
              </TouchableOpacity>
            </Dialog.Actions>
            <Dialog.Actions>
              <TouchableOpacity onPress={props.noFunction}>
                <Text style={estilo.buttom}>NÃO</Text>
              </TouchableOpacity>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

export default UpdateActivityItem;