import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";

const updateActivityItem = async (itemName, activityId, status, id) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const response = await fetch(`http://${url}:3000/activity_items/${id}`, {
        method: 'PUT',
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
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateActivityItem;