import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import constante from "../../constante";

const createOfficial = async (values) => {
    const response = await fetch(`http://${constante.url}:3000/officials`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            official_code: values.officialCode,
            official_name: values.officialName,
            role_id: values.role,
            company_id: values.companyId,
            clerk_id: values.clerkId
        })
    });

    if(response.ok){
        const responseJson = await response.json();
        const responseOfficial = responseJson.official
        return responseOfficial;
    }else{
        throw new Error(responde.data.message);
    }
    
}
    
export default createOfficial;