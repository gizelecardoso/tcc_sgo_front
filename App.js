import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RoutesRole from './src/Routes/RoutesRole';
import BemVindo from './src/Views/BemVindo/BemVindo';
import { DrawerNavigator } from './src/DrawerNavigator';

const App = () => {
  return(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default App;