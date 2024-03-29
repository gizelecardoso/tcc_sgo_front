import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";

const returnActivities = async (callback, category, official_id, welcome) => {
    let urlFinal = ''
    if(welcome){
        if(category == 'oficial'){
            urlFinal = `http://${constante.url}:3000/activities?only_one=true&official_id=${official_id}`
        } else if(category == 'encarregado'){
            urlFinal = `http://${constante.url}:3000/activities?category=${category}&late=true&official_id=${official_id}`
        } else if(category == 'administrador'){
            urlFinal = `http://${constante.url}:3000/activities?category=${category}&late=true`
        }
    } else {
        if(category == 'oficial'){
            urlFinal = `http://${constante.url}:3000/activities?category=${category}&official_id=${official_id}`
        } else if(category == 'encarregado'){
            urlFinal = `http://${constante.url}:3000/activities?category=${category}&official_id=${official_id}`
        }else{
            urlFinal = `http://${constante.url}:3000/activities`
        }
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