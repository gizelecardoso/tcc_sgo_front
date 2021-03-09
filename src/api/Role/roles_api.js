import { Platform } from "react-native";

const returnRoles = async (callback) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }
    
    const response = await fetch(`http://${url}:3000/roles`);
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRoles;