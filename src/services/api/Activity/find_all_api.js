import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";

const returnActivities = async (callback, category, official_id) => {
    let urlFinal = ''
    if(category){
        urlFinal = `http://${constante.url}:3000/officials?category=${category}&official_id=${official_id}`
    } else{
        urlFinal = `http://${constante.url}:3000/activities`
    }
    const response = await fetch(urlFinal , {
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