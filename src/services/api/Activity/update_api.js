import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";

const updateActivity = async (values, id, status) => {
    let url = 'localhost';
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const format_date_front_to_back = (date_api) => {
		return moment(date_api).format();
	}

    const response = await fetch(`http://${url}:3000/activities/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            activity_code: values.activityCode,
            activity_name: values.activityName,
            activity_description: values.activityDescription,
            expected_initial_date: format_date_front_to_back(values.expectedInitialDate),
            expected_final_date: format_date_front_to_back(values.expectedFinalDate),
            activity_status: status,
            official_id: values.officialId
        })
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateActivity;