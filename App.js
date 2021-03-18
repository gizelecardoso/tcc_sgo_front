import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RoutesRole from './src/Routes/RoutesRole';
import BemVindo from './src/Views/BemVindo/BemVindo';
import { DrawerNavigator } from './src/DrawerNavigator';
import CreateOfficial from './src/Views/Official/CreateOfficial';
import CreateTesteFormik from './src/Views/Role/CreateTesteFormik';

const App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;