import { Platform } from "react-native";

const createOfficial = async (officialCode, officialName, id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }

    const response = await fetch(`http://${url}:3000/officials`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            official_code: officialCode,
            official_name: officialName,
            role_id: id
        })
    });

    console.log("entrou aqui");
    console.log(response)
    if(response.ok){
        //token JWT
    }else{
        throw new Error("Não foi possível cadastrar a Função");
    }
    
}
    
export default createOfficial;