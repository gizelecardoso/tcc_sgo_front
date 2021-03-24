const file = 'Role';
const filem = 'role';
const title = 'Função';

export const constantes = {
  title: 'Funções',
  buttomCreate:`Create${file}`,
  buttomUpdate: `Update${file}`,
  mainList: `${file}s`,
  titleCreate: `Cadastrar ${title}`,
  titleUpdate: `Atualizar ${title}`,
  buttom: `Inserir ${title}`,
  buttomAtualizar: `Atualizar ${title}`,
  code: {
    title: `Código ${title}`,
    name: `${filem}Code`,
    attribute: `${filem}Code`,
    placeholder: `Digite o número da ${title}`,
    error: `O código da ${title} não pode ser vazio`  
  },
  name: {
    title: `Nome ${title}`,
    name: `${filem}Name`,
    attribute: `${filem}Name`,
    placeholder: `Digite o nome da ${title}`,
    error: `O nome da ${title} não pode ser vazio` 
  },
  description: {
    title: `Descrição ${title}`,
    name: `${filem}Description`,
    attribute: `${filem}Description`,
    placeholder: `Digite a descrição da ${title}`,
    error: `A descrição da ${title} não pode ser vazio` 
  },
  initialValues: {
    roleCode: '', 
    roleName: '', 
    roleDescription: ''
  },
  messages: {
    sucess: 'Sucesso!',
    createMessage: `${title} cadastrada com sucesso`,
    updateMessage: `${title} atualizada com sucesso`,
    confirm: 'CONTINUAR'
  }
};