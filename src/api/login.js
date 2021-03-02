
const efetuarLogin = async (usuario, senha) => {
    let url = "10.0.2.2";
    if(Platform.OS == "ios"){
        url = "localhost";
    }
    
    const cabecalhoHTTP = {
        method:"POST",
        body:JSON.stringfy({
        userName: usuario,
        password: senha
        }),
        headers: {
        content-type: "application/json"
        }
    }

    const reponse = await fetch(`http://${url}:3000/users/login`, cabecalhoHTTP);
    if(resposta.ok){
        //token JWT
        return resposta.headers.get("x-access-token")
    }else{
        throw new Error("Não foi possível logar");
    }
    
}
    
export default efetuarLogin;