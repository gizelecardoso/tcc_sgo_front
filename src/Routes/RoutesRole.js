import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Roles from '../Views/Role/Roles'
import UpdateRole from '../Views/Role/UpdateRole';
import CreateRole from '../Views/Role/CreateRole';
import Login from '../Views/Login/Login';
import { NavigationContainer } from "@react-navigation/native"

const Stack = createStackNavigator();

const RoutesRole = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Roles" component={Roles}/>
        <Stack.Screen name="UpdateRole" component={UpdateRole}/>
        <Stack.Screen name="CreateRole" component={CreateRole}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RoutesRole;