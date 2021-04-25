
import React from 'react'
import { Text, View } from 'react-native'
import returnOfficials from '../../services/api/Official/find_all_api';
import updateActivityWithOfficial from '../../services/api/Activity/update_api';

const Select = (props) => {
  const [officials, setOfficials] = useState([]);
  const [official, setOfficial] = useState({});
  const [visibleConfirm, setVisibleConfirm] = useState(false);

  useEffect(() => { 
    try {
      returnOfficials(setOfficials);
    } catch (erro) {
      setErrorMessage(erro.mensagem);
    }
  }, []);

  const saveOfficialToActivity = () => {
    updateActivityWithOfficial(props.activity, props.activity.id, official.id);
  }

  const hideDialog = () => {
		setVisibleConfirm(false);
	}

  return (
    <View style={estilo.input_container} >
      <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Funcionários</Text>
      <Picker
        style={estilo.input_text}
        // selectedValue={}
        onValueChange={(itemValue) => {
          setOfficial(itemValue)
          setVisibleConfirm(true);
        }}
      >
        <Picker.Item label='Selecione uma categoria' />
        {
          officials.map(official => {
            return <Picker.Item label={official.official_name} value={official.official_name} key={official.id} />
          })
        }
      </Picker>
      <ConfirmAlert
				visible={visibleConfirm}
				yesFunction={saveOfficialToActivity}
				noFunction={hideDialog}
				dialogTitle='Delegar!!!!!!'
				dialogFrase='Tem certeza que quer delegar essa atividade para esse funcionário ?'
			/>
    </View>
  )
}

export default Select;

