import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Dialog, Paragraph, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';
import estilo from '../../Views/Inicio/estilo';

const Alert = (props) => {

  return (
    <PaperProvider >
      <Portal>
        <Dialog
          style={{ alignItems: 'center' }}
          visible={props.visible}>
          <Dialog.Title>{props.dialogTitle}</Dialog.Title>
          <Dialog.Content>
            <Paragraph style={estilo.input_text}>{props.dialogFrase}</Paragraph>
          </Dialog.Content>
          <View style={{ flexDirection: 'row' }}>
            <Dialog.Actions >
              <TouchableOpacity onPress={props.function}>
                <Text style={estilo.buttom}>{props.confirm}</Text>
              </TouchableOpacity>
            </Dialog.Actions>
          </View>
        </Dialog>
      </Portal>
    </PaperProvider>
  );
};

export default Alert;