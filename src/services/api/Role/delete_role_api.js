import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import constante from "../../constante";

const deleteRole = async (id) => {
    const response = await fetch(`http://${constante.url}:3000/roles/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
        },
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível deletar a Função");
    }
    
}
    
export default deleteRole;