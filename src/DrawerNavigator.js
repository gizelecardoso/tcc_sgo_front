import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
import BemVindo from './Views/BemVindo/BemVindo';

const Drawer = createDrawerNavigator();

export function DrawerNavigator({navigation, route}) {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="BemVindo" component={BemVindo} />
      </Drawer.Navigator>
    );
}
