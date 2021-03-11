import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { AppBar } from "@material-ui/core";
import { Appbar } from "react-native-paper";
import { DrawerNavigator } from "../../DrawerNavigator.js";
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";

const BemVindo = ({ navigation }) => {
    return(
        <Fragment>
            <Cabecalho navigation={navigation}/>
        </Fragment>
    );

}

export default BemVindo;