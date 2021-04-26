import React from "react";
import { View, Text, TextInput } from "react-native";
import estilo from "../../Views/estilo";

const InputValues = (props) => {
  return (
    <View style={estilo.input_container} >
        <Text style={{fontSize:15, fontWeight:'bold'}}>{props.title}</Text>
        <TextInput
            name={props.name}
            placeholder= {props.placeholder}
            style={estilo.input_text} 
            onChangeText={props.handleChange(props.name)}
            onBlur={props.handleBlur(props.name)}
            defaultValue={props.values}
            editable={props.editable}
        />
        {(props.errors && props.touched) &&
            <Text style={estilo.erros}>{props.errors}</Text>
        }
    </View>
  )
}

export default InputValues;