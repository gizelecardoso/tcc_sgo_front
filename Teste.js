import React, { useState } from 'react';
import { TextInput, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { clickButton } from './src/actions';
import { bindActionCreators } from 'redux';

export const Teste = () => {
    const [inputValue, setInputValue] = useState('');
    const { clickButton, newValue } = this.props;
    
  return (
    <View>  
      <TextInput 
        placeholder='clique aqui'
        value={inputValue}
        onChangeText={event => {
            setInputValue(event.target.value);
        }}
      />
      <Button onPress={() => clickButton(inputValue)}>Altere</Button>
      <Text>{ newValue }</Text>
    </View>
  );
}

const mapStateToProps = store => ({
    newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps) (Teste);