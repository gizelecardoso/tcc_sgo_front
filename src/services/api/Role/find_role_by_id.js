import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import constante from "../../constante";

const returnRole = async (callback, id) => {
    const response = await fetch(`http://${constante.url}:3000/roles/${id}`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
        }
    });
    const responseJson = await response.json();
    callback(responseJson);

}
    
export default returnRole;