import { Fragment } from "react";
import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo.js";
import { Appbar } from "react-native-paper";

const Cabecalho = ({title, navigation}) => {
    return (
        <Fragment>
            <Appbar.Header style={estilo.menu}>
                <Appbar.Action icon="menu" onPress={() => {navigation.openDrawer()}} />
                <Appbar.Content title="SGO" />
            </Appbar.Header>
            <View style={estilo.header}>
                <Text style={estilo.title}>Olá, </Text>
                <Text style={estilo.subTitle}>Gabriel</Text>
            </View>
            <View style={estilo.header}>
                <Text style={estilo.title}>{title}</Text>
            </View>
        </Fragment>
    );
}

export default Cabecalho;