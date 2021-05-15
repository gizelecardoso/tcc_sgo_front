import { Platform } from "react-native";
import { constante } from "../../constante";

const loginApi = async (loginName, loginPassword) => {
    const response = await fetch(`http://${constante.url}:3000/login`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login_name: loginName,
            password: loginPassword
        })
    });

    if(response.ok){
        return response.json();
    }else{
      throw new Error("Usuário ou senha inválidos");
    }

}

export default loginApi;