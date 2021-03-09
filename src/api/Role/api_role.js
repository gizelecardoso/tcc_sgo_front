//Work with all api calls

apiUrl = 'http://localhost:3000'

const createOrUpdate = async (obj, id, method, roleCode, roleName, roleDescription) => {
    
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
        //token JWT
    }else{
        throw new Error("Não foi possível criar/alterar a Função");
    }
}


const deleteObj = async (obj, id, method) => {

    const param_method = {
        method: method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    }

    const response = fetch(`${apiUrl}/${obj}/${id}`, param_method);

    if(response.ok){
        //token JWT
    }else{
        throw new Error("Não foi possível deletar a Função");
    }
}


function findAllOrById (obj, id, callback) {

    const response = fetch(`${apiUrl}/${obj}/${id}`);

    const responseJson = response.json();
    callback(responseJson);

    if(response.ok){
        //token JWT
    }else{
        throw new Error("Não foi possível retornar a/as Função");
    }
}





