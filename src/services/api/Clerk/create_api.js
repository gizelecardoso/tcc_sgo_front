import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const createClerk = async (companyId, officialId) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const response = await fetch(`http://${url}:3000/clerks`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            official_id: officialId,
            company_id: companyId
        })
    });

    if(response.ok){
        return response.json();
    }else{
        throw new Error("Não foi possível registrar o dado no sistema");
    }
    
}
    
export default createClerk;