import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnOfficials = async (callback, filter, clerkId) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }
    let urlFinal = '';

    if (filter == 'encarregado'){
        urlFinal = `http://${url}:3000/officials?only_clerks=true`
    } else if (filter == 'activity'){
        urlFinal = `http://${url}:3000/officials?free=true&only_official=true`
    } else if (filter == 'activityClerk'){
        urlFinal = `http://${url}:3000/officials?clerk_id=${clerkId}&free=true&only_official=true`
    } else {
        console.log("Todos", urlFinal)
        urlFinal = `http://${url}:3000/officials`
    }
    
    const response = await fetch( urlFinal, {
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