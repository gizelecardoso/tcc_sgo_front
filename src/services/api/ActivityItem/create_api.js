import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";
import constante from "../../constante";

const createActivityItem = async (itemName, activityId, status) => {
    const response = await fetch(`http://${constante.url}:3000/activity_items`, {
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
        await response.json();
    }else{
        throw new Error(response.data.message);
    }
    
}
    
export default createActivityItem;