import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const updateRole = async (values, id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }

    const response = await fetch(`http://${url}:3000/roles/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
        },
        body: JSON.stringify({
            role_code: values.roleCode,
            role_name: values.roleName,
            role_description: values.roleDescription
        })
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar a Função");
    }
    
}
    
export default updateRole;