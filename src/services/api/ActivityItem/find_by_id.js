import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnActivity = async (callback, id) => {
    let url = 'localhost';
    
    const response = await fetch(`http://${url}:3000/activities/${id}`, {
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
        throw new Error('Não foi possível retornar o dado do sistema');
    }
    

}
    
export default returnActivity;