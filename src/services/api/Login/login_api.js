import { Platform } from "react-native";

const loginApi = async (loginName, loginPassword) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }

    const response = await fetch(`http://${url}:3000/login`, {
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

    console.log("entrou aqui");
    console.log(response)
    if(response.ok){
        //token JWT
        return response.json();
    }else{
      throw new Error("Usuário ou senha inválidos");
    }

}

export default loginApi;