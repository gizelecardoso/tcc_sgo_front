import React, { Fragment, useState, useEffect } from "react";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import estilo from "../../Views/Role/estilo"
import getOfficial from "./teste_axios"
import { Cabecalho } from "../../Components/Cabecalho";

const Teste = ({ navigation }) => {
  const [roles, setRoles] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => { 
    getOfficial(setRoles);
  }, []);


  return(
      <Fragment>
          <Cabecalho title={'Funções'} navigation={navigation}/>
          <View style={estilo.roles_container}>
              <View style={estilo.lista_items}>
                  <FlatList
                      data={roles}
                      keyExtractor={(item) => item.id.toString()}
                      renderItem={
                          ({ item }) => (
                              <View style={estilo.linha_lista}>
                                  <View style={estilo.linha_lista}>                                    
                                      <Text style={estilo.input_text}>{item.role_name}</Text>
                                  </View>                     
                              </View>
                          )
                      }
                  />
              </View>
              <Text>{errorMessage}</Text>
          </View>
      </Fragment>
  );

}

export default Teste;