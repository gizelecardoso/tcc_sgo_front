import { Fragment } from "react";
import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo.js";
import { Appbar } from "react-native-paper";

const Cabecalho = (props) => {
    return (
        <Fragment>
            <Appbar.Header style={estilo.menu}>
                <Appbar.Action icon="menu" onPress={() => {props.navigation.openDrawer()}} />
                <Appbar.Content title="SGO" />
                <Appbar.Action icon="menu" onPress={() => {props.navigation.push(props.page)}} />
            </Appbar.Header>
            <View style={estilo.header}>
                <Text style={estilo.title}>Olá, </Text>
                <Text style={estilo.subTitle}>{props.name}</Text>
            </View>
            <View style={estilo.header}>
                <Text style={estilo.title}>{props.title}</Text>
            </View>
        </Fragment>
    );
}

export default Cabecalho;