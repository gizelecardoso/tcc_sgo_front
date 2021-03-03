const returnRoles = async () => {
    
    const response = await fetch(`http://localhost:3000/roles`);
    const responseJson = await response.json();

    return responseJson.data;
    
}
    
export default returnRoles;