import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const updateOfficial = async (values, id) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const response = await fetch(`http://${url}:3000/officials/${id}`, {
        method: 'PUT',
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

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o Funcionário(a)");
    }
    
}
    
export default updateOfficial;