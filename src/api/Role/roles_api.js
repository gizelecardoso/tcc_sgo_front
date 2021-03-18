import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnRoles = async (callback) => {
    let url = "localhost:3000";
    
    const response = await fetch(`http://${url}/roles`, {
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
        }
    });
    const responseJson = await response.json();
    callback(responseJson);

}
    
export default returnRoles;