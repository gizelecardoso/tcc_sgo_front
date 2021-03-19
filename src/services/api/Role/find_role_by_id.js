import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const returnRole = async (callback, id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }
    
    const response = await fetch(`http://${url}:3000/roles/${id}`, {
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