import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

const deleteCompany = async (id) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }
    
    const response = await fetch(`http://${url}:3000/companies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível deletar o dado do sistema");
    }
}
    
export default deleteCompany;