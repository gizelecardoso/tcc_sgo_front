import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { createAppContainer } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import BemVindo from './Views/BemVindo/BemVindo'
import estilo from './Components/DrawerContent/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function DrawerContent(props) {
  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View>
          <Text>Main Content</Text>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={estilo.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon 
              name="exit-to-app"
              color={color}
              size={size}
            />
          )}
          label="Sign Out"
          onPress={() => {}}
        />
      </Drawer.Section>
    </View>
  );
}
