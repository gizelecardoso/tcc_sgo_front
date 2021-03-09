import { Fragment } from "react";
import React from "react";
import estilo from "./estilo.js";
import { TextInput, TouchableOpacity } from "react-native";
import { EvilIcons } from '@expo/vector-icons';

const Pesquisar = (props) => {
    const tentar = (item)=> {
        console.log("Pesquisar")
    }

    return (
        <Fragment>
            <TextInput
                placeholder="Pesquisar"
                style={estilo.search_input}
            />
            <TouchableOpacity onPress={tentar}>
                <EvilIcons name="search" size={24} color="black"  />
            </TouchableOpacity>
        </Fragment>
    );
}

export default Pesquisar;