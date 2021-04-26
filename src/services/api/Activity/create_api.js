import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";

const createActivity = async (values, status) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const format_date_front_to_back = (date_api) => {
		return moment(date_api).format();
	}

    const response = await fetch(`http://${url}:3000/activities`, {
        method: 'POST',
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
            activity_status: status
        })
    });

    if(response.ok){
        const responseJson = await response.json();
        const responseOfficial = responseJson.official
        return responseOfficial;
    }else{
        throw new Error(response.data.message);
    }
    
}
    
export default createActivity;