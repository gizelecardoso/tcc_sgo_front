import React, { useState } from 'react';
import { TextInput, View, Button, Text } from 'react-native';
import { connect } from 'react-redux';
import { clickButton } from './src/actions';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './src/actions/index';

const Teste = () => {
    const [inputValue, setInputValue] = useState('');
    const newValue = useSelector(estado => estado.clickState.newValue);
    const dispatch = useDispatch();
    const adicionaValue = () => {
      dispatch(actions.clickButton(inputValue));
    }
    
  return (
    <View>  
      <TextInput 
        placeholder='clique aqui'
        defaultValue={ inputValue }
        onChangeText={ value => {setInputValue(value) }}
      />
      <Button onPress={() => adicionaValue()}>Altere</Button>
      <Text>{ newValue }</Text>
    </View>
  );
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Teste);