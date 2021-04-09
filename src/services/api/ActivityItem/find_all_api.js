import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnActivityItems = async (callback, id) => {
    let url = 'localhost';
    
    const response = await fetch(`http://${url}:3000/activity_items?activity_id=${id}`, {
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
    
export default returnActivityItems;