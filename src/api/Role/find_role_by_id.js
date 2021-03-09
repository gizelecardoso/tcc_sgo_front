const returnRole = async (callback, id) => {
    
    const response = await fetch(`http://localhost:3000/roles/${id}`);
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRole;