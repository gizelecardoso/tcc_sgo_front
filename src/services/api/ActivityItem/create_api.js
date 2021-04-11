import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";

const createActivityItem = async (itemName, activityId, status) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const response = await fetch(`http://${url}:3000/activity_items`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            item_name: itemName,
            item_status: status,
            activity_id: activityId
        })
    });

    if(response.ok){
        console.log('entrou aqui')
        console.log(response)
        console.log(itemName)
        await response.json();
    }else{
        console.log(response)
        console.log(itemName)
        console.log(status)
        console.log(activityId)
        throw new Error(response.data.message);
    }
    
}
    
export default createActivityItem;