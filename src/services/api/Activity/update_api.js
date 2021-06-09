import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import moment from "moment";
import { constante } from "../../constante";

function format_date_front_to_back (date_api) {
    return moment(date_api).format();
}

function validateBody (status, values, officialId, reason, date) {
    let body = {}
    if(values.activityStatus != status && reason) {
        body = {
            activity_status: status,
            reason_to_stop: reason,
            stopped_date: format_date_front_to_back(date)
        }
    }else if(values.activityStatus != status) {
        if (status == 'executando'){
            if (values.initialDate == null){
                body = {
                    activity_status: status, 
                    initial_date: format_date_front_to_back(date)
                }
            } else {
                body = {
                    activity_status: status,
                }
            }
        } else if (status == 'finalizada') {
            console.log('finalizada')
            values.finalDate = format_date_front_to_back(date)
            body = {
                activity_status: status, 
                final_date: format_date_front_to_back(date)
            }
        }
    }else if(values.officialId != officialId) {
        body = {
            official_id: values.officialId,
            activity_status: status,
        }
    }else {
        body = {
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
        }
    }
    return body
}


const updateActivity = async (values, id, status, officialId, date, reason) => {
    let body = validateBody (status, values, officialId, reason, date)
    const response = await fetch(`http://${constante.url}:3000/activities/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify(body)
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateActivity;