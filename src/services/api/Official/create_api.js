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
            role_id: values.role,
            company_id: values.companyId,
            clerk_id: values.clerkId
        })
    });

    console.log("entrou aqui");
    if(response.ok){
        const responseJson = await response.json();
        console.log(responseJson);
        const responseOfficial = responseJson.official
        console.log(responseOfficial);
        return responseOfficial;
    }else{
        throw new Error(responde.data.message);
    }
    
}
    
export default createOfficial;