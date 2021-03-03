const createRole = async (roleCode, roleName, roleDescription) => {
    // let url = "10.0.2.2";
    // if(Platform.OS == "ios"){
    //     url = "localhost";
    // }
    

    // const cabecalhoHTTP = {
    //     method:"POST",
    //     body:JSON.stringfy({
    //         role_code: roleCode,
    //         role_name: roleName,
    //         role_description: roleDescription
    //     }),
    //     headers: {
    //         "Content-type" : "application/json"
    //     }
    // }

    //const reponse = await fetch(`http://${url}:3000/roles`, cabecalhoHTTP);
    //const response = await fetch(`http://localhost:3000/officials`, cabecalhoHTTP);
    
    const response = await fetch(`http://localhost:3000/roles`, {
        method: 'POST',
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
        throw new Error("Não foi possível cadastrar a Função");
    }
    
}
    
export default createRole;