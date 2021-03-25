import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Companies from '../Views/Company/Companies';
import UpdateCompany from '../Views/Company/UpdateCompany';
import CreateCompany from '../Views/Company/CreateCompany';

const Stack = createStackNavigator();

const RoutesCompany = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Companies" component={Companies} options={{headerShown:false}}/>
      <Stack.Screen name="UpdateCompany" component={UpdateCompany} options={{headerShown:false}}/>
      <Stack.Screen name="CreateCompany" component={CreateCompany} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default RoutesCompany;