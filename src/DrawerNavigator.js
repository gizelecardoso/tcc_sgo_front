import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import Login from './Views/Login/Login';
import BemVindo from './Views/BemVindo/BemVindo';
import Roles from './Views/Role/Roles';
import UpdateRole from './Views/Role/UpdateRole';
import CreateRole from './Views/Role/CreateRole';
import RoutesRole from './Routes/RoutesRole';
import RoutesOfficial from './Routes/RoutesOfficial';
import Inicio from './Views/Inicio/Inicio';


const Drawer = createDrawerNavigator();

export function DrawerNavigator({navigation, route}) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="BemVindo" component={BemVindo} />
        <Drawer.Screen name="Roles" component={RoutesRole} />
        <Drawer.Screen name="Officials" component={RoutesOfficial} />
      </Drawer.Navigator>
    );
}
