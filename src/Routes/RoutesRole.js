import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Roles from '../Views/Role/Roles'
import UpdateRole from '../Views/Role/UpdateRole';
import CreateRole from '../Views/Role/CreateRole';
import Login from '../Views/Login/Login';
import { NavigationContainer } from "@react-navigation/native"
import BemVindo from '../Views/BemVindo/BemVindo';

const Stack = createStackNavigator();

const RoutesRole = () => {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Roles" component={Roles} options={{headerShown:false}}/>
      <Stack.Screen name="UpdateRole" component={UpdateRole} options={{headerShown:false}}/>
      <Stack.Screen name="CreateRole" component={CreateRole} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export default RoutesRole;