import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import estilo from "../../Views/estilo";
// import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const InputDate = (props) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    props.setFieldValue(props.name, moment(date).format('YYYY-MM-DD'))
    hideDatePicker();
  };

  return (
    <View style={estilo.input_container}>
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{props.title}</Text>
      <TouchableOpacity onPress={showDatePicker}>
        <Text style={estilo.input_text} >{moment(props.values).format('DD-MM-YYYY')}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        date={moment(props.values).toDate()}
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}

export default InputDate;