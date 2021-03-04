const returnRole = async () => {
    
    const response = await fetch(`http://localhost:3000/roles/1`);
    const responseJson = await response.json();
    console.log(responseJson)
    callback(responseJson);

}
    
export default returnRole;