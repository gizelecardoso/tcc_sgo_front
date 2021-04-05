import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Avatar, Title, Caption, Paragraph, Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import estilo from './Components/DrawerItem/estilo';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from './Components/DrawerItem/Item';
import { constantes } from './constantes';

export function DrawerContent(props) {
  const [nameOfficial, setNameOfficial] = useState('');
  const [loginOfficial, setLoginOfficial] = useState('');

  const setInfos = async () => {
      try{
          const official = await AsyncStorage.getItem(constantes.tokenOfficialName);
          const login = await AsyncStorage.getItem(constantes.tokenLoginName);
          if (official !== null && login !== null) {
              setNameOfficial(official);
              setLoginOfficial(login);
          }
      } catch (e) {
          alert('Failed');
      }
	}

  useEffect(() => {
    setInfos();
  }, []);

  const onSignOut = async() =>  {
    try {
      await AsyncStorage.removeItem(constantes.tokenName);
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
                  uri: constantes.avatar
                }}
                size={50}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={estilo.title}>{nameOfficial}</Title>
                <Caption style={estilo.caption}>{loginOfficial}</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={estilo.drawerSection}>
            <Item navigation={props.navigation}label={'Bem-Vindo'} page={'BemVindo'}/>
            <Item navigation={props.navigation}label={'Funções'} page={'Roles'}/>
            <Item navigation={props.navigation}label={'Funcionários(as)'} page={'Officials'}/>
            <Item navigation={props.navigation}label={'Empresas'} page={'Companies'}/>
            <Item navigation={props.navigation}label={'Atividades'} page={'Activities'}/>
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
        />
      </Drawer.Section>
    </View>
  );
}
