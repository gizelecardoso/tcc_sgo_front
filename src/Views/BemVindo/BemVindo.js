import React, { Fragment } from "react";
import { Button, TextInput, View, Text, TouchableOpacity} from "react-native";
import estilo from "./estilo.js"
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons'; 
import { AppBar } from "@material-ui/core";
import { Appbar } from "react-native-paper";
import { DrawerNavigator } from "../../DrawerNavigator.js";
import Cabecalho from "../../Components/Cabecalho/Cabecalho.js";

const BemVindo = (props) => {
    return(
        <Fragment>
            <Cabecalho navigation={props.navigation} name={props.route.params.name_official} login={props.route.params.login_name}/>
        </Fragment>
    );

}

export default BemVindo;