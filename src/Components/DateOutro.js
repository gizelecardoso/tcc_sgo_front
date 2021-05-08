// //  src/components/DatePicker/index.js

// import React, { PureComponent } from 'react';
// import { PropTypes } from 'prop-types';

// const styles = {
//   paddingRight: 5,
//   height: 32,
//   fontSize: 17,
//   paddingLeft: 8
// };

// export default class Date extends PureComponent {
//   static propTypes = {
//     date: PropTypes.string,
//     mode: PropTypes.string.isRequired,
//     minDate: PropTypes.string,
//     maxDate: PropTypes.string,
//     placeholder: PropTypes.string,
//     customStyles: PropTypes.object,
//     onDateChange: PropTypes.func.isRequired
//   };

//   render = () => <input
//     type={this.props.mode === 'datetime' ? 'datetime-local' : this.props.mode}
//     onChange={e => this.props.onDateChange(e.target.value)}
//     defaultValue={this.props.date}
//     min={this.props.minDate}
//     max={this.props.maxDate}
//     placeholder={this.props.placeholder}
//     style={{...styles, ...this.props.customStyles}}
//   />
// }

import React, { PureComponent, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-native-datepicker';

const DateOutro = () => {
  const [date, setDate] = useState('');
  return (
    <View>
      <DatePicker
        // style={} 
        format="DD/MM/YYYY"
        date={date}
        onDateChange={(value) => {setDate(value)}}
      />
    </View>
  );
  // const [date, setDate] = useState('');
  // const [mode, setMode] = useState('date');
  // const [minDate, setMinDate] = useState('');
  // const [maxDate, setMaxDate] = useState('');
  // const [placeholder, setPlaceholder] = useState('Selecione uma data');

  // const onDateChange = (value) => {
  //   setDate(value)
  // }
  
  // return (
  //   <TextInput 
  //     style={{ width: 350 }}
  //     type="datetime"
  //     onChange={(value) => {onDateChange(value)}}
  //     defaultValue={date}
  //     min={minDate}
  //     max={maxDate}
  //     placeholder={placeholder}
  //   />
  // )
}

export default Date;
