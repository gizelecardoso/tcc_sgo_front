import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import { constante } from "../../constante";
import moment from "moment";

const updateActivityItem = async (itemName, activityId, status, id, finishedDate) => {
    const format_date_front_to_back = (date_api) => {
		return moment(date_api).format();
	}
    const response = await fetch(`http://${constante.url}:3000/activity_items/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            item_name: itemName,
            item_status: status,
            activity_id: activityId,
            finished_date: format_date_front_to_back(finishedDate)
        })
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateActivityItem;