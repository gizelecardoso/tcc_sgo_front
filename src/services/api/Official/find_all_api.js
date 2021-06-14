import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";

const returnOfficials = async (callback, filter, clerkId, id) => {
    let urlFinal = ''
    if (filter == 'encarregado'){
        urlFinal = `http://${constante.url}:3000/officials?only_clerks=true`
    } else if (filter == 'activity'){
        urlFinal = `http://${constante.url}:3000/officials?only_official=true&free=true`
    } else if (filter == 'activityClerk'){
        console.warn(clerkId)
        urlFinal = `http://${constante.url}:3000/officials?only_official=true&free=true&clerk_id=${clerkId}`
    } else if (filter == 'delegate') {
        if(clerkId){
            urlFinal = `http://${constante.url}:3000/officials?only_official=true&free=true&clerk_id=${clerkId}&delegate=true&id=${id}`
        }else {
            urlFinal = `http://${constante.url}:3000/officials?only_official=true&free=true&delegate=true&id=${id}`
        }
    } else {
        urlFinal = `http://${constante.url}:3000/officials`
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