import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";

const updateActivity = async (values, id, status, date) => {
    let url = 'localhost';

    if(Platform.OS == 'android'){
        url = '10.0.2.2';
    }

    const format_date_front_to_back = (date_api) => {
		return moment(date_api).format();
	}

    if (status == 'executando'){
        console.log('data inicial');
        values.initialDate = format_date_front_to_back(date);
        console.log(values.initialDate);
    } else if (status == 'finalizada') {
        console.log('data final');
        values.finalDate = format_date_front_to_back(date);
        console.log(values.finalDate);
    } else if (status == 'pausada') {
        console.log('data parada');
        values.stoppedDate = format_date_front_to_back(date);
        console.log(values.stoppedDate);
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
            official_id: values.officialId,
            initial_date: values.initialDate,
            final_date: values.finalDate,
            stopped_date: values.stoppedDate,
        })
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateActivity;