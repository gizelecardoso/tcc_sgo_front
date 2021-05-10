import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, Platform } from "react-native";
import { constante } from "../../constante";

const createRole = async (values) => {
    const response = await fetch(`http://${constante.url}:3000/roles`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
        },
        body: JSON.stringify({
            role_code: values.roleCode,
            role_name: values.roleName,
            role_description: values.roleDescription,
            role_category: values.roleCategory
        })
    });

    if(response.ok){
        return response.json();
    }else{
        throw new Error(responde.data.message);
    }
    
}
    
export default createRole;