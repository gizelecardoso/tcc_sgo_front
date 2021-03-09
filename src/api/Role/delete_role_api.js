import { Platform } from 'react-native';

const deleteRole = async (id) => {
    let url = "localhost";
    if(Platform.OS == 'android'){
        url = "10.0.2.2";
    }
    
    const response = await fetch(`http://${url}:3000/roles/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        },
    });

    console.log("entrou aqui");
    console.log(response)
    if(response.ok){
        //token JWT
    }else{
        throw new Error("Não foi possível deletar a Função");
    }
    
}
    
export default deleteRole;