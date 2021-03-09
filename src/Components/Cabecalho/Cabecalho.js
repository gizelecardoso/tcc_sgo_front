import { Fragment } from "react";
import React from "react";
import { View, Text } from "react-native";
import estilo from "./estilo.js";

const Cabecalho = ({title}) => {
    return (
        <Fragment>

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