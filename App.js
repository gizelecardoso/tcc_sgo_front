import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RoutesRole from './src/Routes/RoutesRole';
import BemVindo from './src/Views/BemVindo/BemVindo';
import { DrawerNavigator } from './src/DrawerNavigator';
import CreateOfficial from './src/Views/Official/CreateOfficial';
import { Text, Linking, AppRegistry } from  'react-native';
import Date from './src/Components/Date';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    // <Text
    //   style={{ marginTop: 30 }}
    //   onPress={() =>
    //     Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
    //       if (supported) {
    //         return Linking.openURL(
    //           "whatsapp://send?phone=5511981406232&text=Oi"
    //         );
    //       } else {
    //         return Linking.openURL(
    //           "https://api.whatsapp.com/send?phone=5511981406232&text=Oi"
    //         );
    //       }
    //     })
    //   }>
    //   WhatsApp Mensagem
    // </Text >
    // <Date />
  );
}

export default App;