const file = 'Official';
const filem = 'official';
const title = 'Funcionários (as)';

export const constantes = {
  title: 'Funcionários (as)',
  page: 'BemVindo',
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
    placeholder: `Digite o número do(a) ${title}`,
    error: `O código da ${title} não pode ser vazio`  
  },
  name: {
    title: `Nome ${title}`,
    name: `${filem}Name`,
    attribute: `${filem}Name`,
    placeholder: `Digite o nome do(a) ${title}`,
    error: `O nome da ${title} não pode ser vazio` 
  },
  role: {
    title: `Função do(a) ${title}`,
    name: `role` 
  },
  initialValues: {
    officialCode: '', 
    officialCode: '', 
    role: 0
  },
  messages: {
    sucess: 'Sucesso!',
    createMessage: `${title} cadastrada com sucesso`,
    updateMessage: `${title} atualizada com sucesso`,
    confirm: 'CONTINUAR'
  }
};