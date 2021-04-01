import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnOfficials = async (callback, filter) => {
    let url = 'localhost';
    let urlFinal = '';

    console.log('chamou api');
    console.log(filter);

    if (filter == 'encarregado'){
        console.log('entrou no if');
        console.log(filter);
        urlFinal = `http://${url}:3000/officials?only_clerks=true`
    } else {
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
        console.log('response');
        console.log(responseJson);
    }else{
        throw new Error('Não foi possível retornar os Funcionários(as)');
    }
}
    
export default returnOfficials;