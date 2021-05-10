import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";
import constante from "../../constante";

const updateActivity = async (values, id, status, date) => {
    const format_date_front_to_back = (date_api) => {
		return moment(date_api).format();
	}

    if (status == 'executando'){
        if (values.initialDate == ''){
            values.initialDate = format_date_front_to_back(date);
        }
        console.log(values.initialDate);
    } else if (status == 'finalizada') {
        values.finalDate = format_date_front_to_back(date);
    } else if (status == 'pausada') {
        values.stoppedDate = format_date_front_to_back(date);
    }

    const response = await fetch(`http://${constante.url}:3000/activities/${id}`, {
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