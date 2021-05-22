import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import Inicio from './Views/Inicio/Inicio';
import Login from './Views/Login/Login';
import BemVindo from './Views/BemVindo/BemVindo';
import RoutesRole from './Routes/RoutesRole';
import RoutesOfficial from './Routes/RoutesOfficial';
import RoutesCompany from './Routes/RoutesCompany';
import RoutesActivity from './Routes/RoutesActivity';
import UpdateActivity from './Views/Activity/UpdateActivity';

const Drawer = createDrawerNavigator();

export function DrawerNavigator({navigation, route}) {
    return (
      <Drawer.Navigator 
        initialRouteName = 'Inicio'
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="BemVindo" component={BemVindo} />
        <Drawer.Screen name="UpdateActivity" component={UpdateActivity} />
        <Drawer.Screen name="Roles" component={RoutesRole} />
        <Drawer.Screen name="Officials" component={RoutesOfficial} />
        <Drawer.Screen name="Activities" component={RoutesActivity} />
        <Drawer.Screen name="Companies" component={RoutesCompany} />
      </Drawer.Navigator>
    );
}
