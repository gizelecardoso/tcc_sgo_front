import * as React from 'react';
import { View } from 'react-native';
import { Button, Dialog, Paragraph, Portal } from 'react-native-paper';
import { Provider as PaperProvider } from 'react-native-paper';

const Alert = (props) => {

  return (
    <View>
      <PaperProvider>
        <Portal>
          <Dialog
            visible={props.visible}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={props.onPress}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </PaperProvider>
  </View>
  );
};

export default Alert;