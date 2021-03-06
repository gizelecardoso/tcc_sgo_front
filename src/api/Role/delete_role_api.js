const deleteRole = async (id) => {

    const response = await fetch(`http://localhost:3000/roles/${id}`, {
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