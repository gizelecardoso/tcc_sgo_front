import React from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import estilo from './Components/DrawerContent/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DrawerContent(props) {
  const onSignOut = async() =>  {
    try {
      console.log(AsyncStorage.getItem("login_official_token"))
      await AsyncStorage.removeItem("login_official_token");
      console.log('Data removed')
      console.log(AsyncStorage.getItem("login_official_token"))
    }
    catch(exception) {
        console.log(exception)
    }
  }

  return (
    <View style={{flex:1}}>
      <DrawerContentScrollView {...props}>
        <View style={estilo.drawerContent}>
          <View style={estilo.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image 
                source={{
                  uri: 'https://media.gettyimages.com/vectors/bricklayer-vector-id1217941117?s=612x612'
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={estilo.title}>José Silva</Title>
                <Caption style={estilo.caption}>jose.silva</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={estilo.drawerSection}>
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="home-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Bem-Vindo"
              onPress={() => {props.navigation.navigate('BemVindo')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Funções"
              onPress={() => {props.navigation.navigate('Roles')}}
            />
            <DrawerItem 
              icon={({color, size}) => (
                <Icon 
                  name="account-outline"
                  color={color}
                  size={size}
                />
              )}
              label="Funcionarios(as)"
              onPress={() => {props.navigation.navigate('Officials')}}
            />
          </Drawer.Section>
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
          onPress={() => onSignOut().then(() => props.navigation.navigate("Inicio"))}
          //onLoad = () => {
        // this.props.navigation.addListener('didFocus', () => console.log('x'))
        // }
        />
      </Drawer.Section>
    </View>
  );
}
