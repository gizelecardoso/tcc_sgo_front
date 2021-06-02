import { Fragment, useEffect, useState } from "react";
import React from "react";
import { View, Text, Button } from "react-native";
import estilo from "./estilo";
import { Appbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Cabecalho = (props) => {
	const [nameOfficial, setNameOfficial] = useState('');

	const setName = async () => {
		try {
			const official = await AsyncStorage.getItem('name_official');
			if (official !== null) {
				setNameOfficial(official);
			}
		} catch (e) {
			alert('Failed');
		}
	}

	useEffect(() => {
		setName();
	}, []);

	return (
		<Fragment>
			<Appbar.Header style={estilo.menu}>
				<Appbar.Action icon="menu" onPress={() => { props.navigation.openDrawer() }} />
				<Appbar.Content title="SGO" />
				<Appbar.Action icon="menu" onPress={() => { props.navigation.push(props.page) }} />
			</Appbar.Header>
			<View style={estilo.header}>
				<Text style={estilo.title}>Olá, </Text>
				<Text style={estilo.subTitle}>{nameOfficial.split(' ')[0].toUpperCase()}</Text>
			</View>
			<View style={estilo.header}>
				<Text style={estilo.title}>{props.title}</Text>
			</View>
		</Fragment>
	);
}

export default Cabecalho;