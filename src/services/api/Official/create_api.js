import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const createOfficial = async (officialCode, officialName, id) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const response = await fetch(`http://${url}:3000/officials`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            official_code: officialCode,
            official_name: officialName,
            role_id: id
        })
    });

    if(response.ok){
    }else{
        throw new Error('Não foi possível cadastrar a Função');
    }
    
}
    
export default createOfficial;