import { Platform } from "react-native";

const returnRole = async (callback, id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }
    
    const response = await fetch(`http://${url}:3000/roles/${id}`);
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRole;