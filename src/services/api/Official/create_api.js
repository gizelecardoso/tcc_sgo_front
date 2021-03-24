import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const createOfficial = async (values) => {
    let url = "localhost";
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
            official_code: values.officialCode,
            official_name: values.officialName,
            role_id: values.role
        })
    });

    console.log("entrou aqui");
    if(response.ok){
        return response.json();
    }else{
        throw new Error(responde.data.message);
    }
    
}
    
export default createOfficial;