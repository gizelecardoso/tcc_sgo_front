import React from "react";
import { TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import estilo from "./estilo";

const ButtomCreate = (props) => {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate(props.create)}>                
      <AntDesign name="pluscircle" size={20} style={estilo.adicionar}/>
    </TouchableOpacity>
  )
}

export default ButtomCreate;