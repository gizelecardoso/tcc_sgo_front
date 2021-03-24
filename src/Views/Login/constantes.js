const title = 'Login';

export const constantes = {
  title: 'SGO',
  subTitle: 'Sistema de Gerenciamento de Obras',
  buttom: `Entrar`,
  page: 'BemVindo',
  tokenName: 'login_official_token',
  tokenOfficialName: 'name_official',
  tokenLoginName: 'login_name',
  loginName: {
    name: `loginName`,
    attribute: `loginName`,
    placeholder: `Digite o nome de usuário`,
    error: `O usuário não pode estar vazio`  
  },
  password: {
    name: `password`,
    attribute: `password`,
    placeholder: `Digite sua senha`,
    error: `A senha não pode ser vazia` 
  },
  initialValues: {
    loginName: '', 
    password: '', 
  },
  messages: {
    status: 'Sucesso!',
    messages: `Usuário logado com sucesso`,
    confirm: 'Continuar'
  }
};