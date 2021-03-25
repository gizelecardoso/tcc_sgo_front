const file = 'Company';
const filem = 'company';
const title = 'Empresa';

export const constantes = {
  title: 'Empresas',
  buttomCreate:`Create${file}`,
  buttomUpdate: `Update${file}`,
  mainList: `Companies`,
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
  branch: {
    title: `Ramo ${title}`,
    name: `${filem}Branch`,
    attribute: `${filem}Branch`,
    placeholder: `Digite a ramo da ${title}`,
    error: `O ramo da ${title} não pode ser vazio` 
  },
  initialValues: {
    companyCode: '', 
    companyName: '', 
    companyBranch: ''
  },
  messages: {
    sucess: 'Sucesso!',
    createMessage: `${title} cadastrada com sucesso`,
    updateMessage: `${title} atualizada com sucesso`,
    confirm: 'CONTINUAR'
  }
};