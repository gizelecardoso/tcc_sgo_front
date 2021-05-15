import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";

const returnActivities = async (callback) => {
    const response = await fetch(`http://${constante.url}:3000/activities`, {
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
        throw new Error("Não foi possível retornar os dados do sistema");
    }
}
    
export default returnActivities;