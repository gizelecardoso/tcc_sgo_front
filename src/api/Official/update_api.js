import { Platform } from "react-native";

const updateRole = async (roleCode, roleName, roleDescription, id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }

    const response = await fetch(`http://${url}:3000/roles/${id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            role_code: roleCode,
            role_name: roleName,
            role_description: roleDescription
        })
    });

    console.log("entrou aqui");
    console.log(response)
    if(response.ok){
        //token JWT
    }else{
        throw new Error("Não foi possível atualizar a Função");
    }
    
}
    
export default updateRole;