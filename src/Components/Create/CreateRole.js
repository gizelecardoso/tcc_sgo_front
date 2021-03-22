const CreateRole = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const values = props.values

  const tryCreateRole = async(values) =>{
      try{
          await createRole(values);
          props.navigation.push(props.page);
      } catch(erro) {
          setErrorMessage(erro.mensagem);
      }
  }

  return {
    
  }
}

export default CreateRole;