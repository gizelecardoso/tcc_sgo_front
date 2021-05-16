import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { DrawerNavigator } from './src/DrawerNavigator';
import Inicio from './src/Views/Inicio/Inicio';
import Login from './src/Views/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
// import Date from './src/Components/Date';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Inicio" component={Inicio}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="drawerStack" component={DrawerNavigator}/>
      </Stack.Navigator>
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