import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RoutesRole from './src/Routes/RoutesRole';
import BemVindo from './src/Views/BemVindo/BemVindo';
import { DrawerNavigator } from './src/DrawerNavigator';
import CreateOfficial from './src/Views/Official/CreateOfficial';

const App = () => {
  return(
    // <NavigationContainer>
    //   <DrawerNavigator />
    // </NavigationContainer>
    < CreateOfficial />
  );
}

export default App;