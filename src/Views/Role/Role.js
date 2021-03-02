import React, { Fragment } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js"

const Role = () => {
    const onPress = () =>{
        console.log("Clicou")
    }
    return(
        <Fragment>
            <View style={estilo.container}>
                <View style={estilo.header}>
                    <Text style={estilo.title}>Olá, </Text>
                    <Text style={estilo.subTitle}>Gabriel</Text>
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o número da Função"
                    />
                </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Código da Função</Text>
                    <TextInput
                        style={estilo.input_text} 
                        placeholder="Digite o nome da Função"
                    />
                  </View>
                <View style={estilo.input_container} >
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Descrição da Função</Text>
                    <TextInput
                        multiline = {true}
                        numberOfLines = {4}
                        style={estilo.input_area} 
                        placeholder="Digite a descrição da Função"
                    />
                </View>
                <TouchableOpacity onPress={onPress}>
                    <Text style={estilo.submit}>Inserir Função</Text>
                </TouchableOpacity>
               
            </View>
            
        </Fragment>
    );

}

export default Role;