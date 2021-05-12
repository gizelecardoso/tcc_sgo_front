import { DrawerItem } from '@react-navigation/drawer'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Item = (props) => {
  return (
    <DrawerItem 
      icon={({color, size}) => (
        <Icon 
          name="home-outline"
          color={color}
          size={size}
        />
      )}
      label={props.label}
      onPress={() => {props.navigation.navigate(props.page, {category: props.category})}}
    />
  )
}

export default Item;
