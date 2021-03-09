import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 

const BemVindo = ({ navigation }) => {
    return(
        <Fragment>
            <Text style={estilo.title}>SGO</Text>
            <Text style={estilo.subTitle}>Sistema de Gerenciamento de Obras</Text>
        </Fragment>
    );

}

export default BemVindo;