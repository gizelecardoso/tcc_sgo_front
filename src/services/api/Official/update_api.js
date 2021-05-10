import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";

const updateOfficial = async (values, id) => {
    const response = await fetch(`http://${constante.url}:3000/officials/${id}`, {
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