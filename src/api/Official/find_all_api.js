import { Platform } from "react-native";

const returnRoles = async (callback) => {
    let url = "localhost:3000";
    if(Platform.OS == 'android'){
        url = "192.168.15.174:19000";
    }
    
    const response = await fetch(`http://${url}/roles`);
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRoles;