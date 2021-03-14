import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnOfficials = async (callback) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }
    
    const response = await fetch(`http://${url}/officials`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        }
    });

    if(response.ok){
        const responseJson = await response.json();
        callback(responseJson);
    }else{
        throw new Error('Não foi possível retornar os Funcionários(as)');
    }
}
    
export default returnOfficials;