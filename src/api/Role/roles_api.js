
const returnRoles = async () => {
    
    const response = await fetch("http://localhost:3000/roles");
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRoles;