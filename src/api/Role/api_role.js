//Work with all api calls
let url = "localhost";
if(Platform.OS == 'android'){
    url = "10.0.2.2";
}

apiUrl = `http://${url}:3000`

const ERROR_CREATE = "Não foi possível criar/alterar a Função";
const ERROR_DELETE = "Não foi possível deletar a Função";
const ERROR_FIND = "Não foi possível retornar a/as Função";

const HEADER_REQ = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `bearer ${await AsyncStorage.getItem("login_official_token")}`
}

export const createOrUpdate = async (obj, id, method, roleCode, roleName, roleDescription) => {
    
    const param_method = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            role_code: roleCode,
            role_name: roleName,
            role_description: roleDescription
        })
    }

    const response = await fetch(`${apiUrl}/${obj}/${id}`, param_method);

    if(response.ok){
    }else{
        throw new Error(ERROR_CREATE);
    }
}


export const deleteObj = async (obj, id, method) => {

    const param_method = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const response = fetch(`${apiUrl}/${obj}/${id}`, param_method);

    if(response.ok){
    }else{
        throw new Error(ERROR_DELETE);
    }
}


export function findAllOrById (obj, id, callback) {

    const response = fetch(`${apiUrl}/${obj}/${id}`);

    const responseJson = response.json();
    callback(responseJson);

    if(response.ok){
    }else{
        throw new Error(ERROR_FIND);
    }
}





