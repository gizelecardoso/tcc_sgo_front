import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import constante from "../../constante";

const updateCompany = async (values, id) => {
    const response = await fetch(`http://${constante.url}:3000/companies/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `bearer ${await AsyncStorage.getItem('login_official_token')}`
        },
        body: JSON.stringify({
            company_code: values.companyCode,
            company_name: values.companyName,
            company_branch: values.companyBranch
        })
    });

    if(response.ok){
    }else{
        throw new Error("Não foi possível atualizar o dado no sistema");
    }
    
}
    
export default updateCompany;