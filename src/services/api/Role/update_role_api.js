import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import constante from "../../constante";

const updateRole = async (values, id) => {
    const response = await fetch(`http://${constante.url}:3000/roles/${id}`, {
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