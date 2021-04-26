const file = 'Activity';
const filem = 'activity';
const title = 'Atividade';

export const constantes = {
  title: 'Atividades',
  buttomCreate:`Create${file}`,
  buttomUpdate: `Update${file}`,
  mainList: `Activities`,
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
  expectedInitialDate: {
    title: `Data Inicial ${title}`,
    name: `expectedInitialDate`,
    attribute: `expectedInitialDate`,
    placeholder: `Selecione a data inicial`,
    error: `A data inicial da ${title} não pode ser vazia` 
  },
  expectedFinalDate: {
    title: `Data Final ${title}`,
    name: `expectedFinalDate`,
    attribute: `expectedFinalDate`,
    placeholder: `Selecione a data final`,
    error: `A data final da ${title} não pode ser vazia` 
  },
  initialValues: {
    activityCode: '', 
    activityName: '', 
    activityDescription: '',
    expectedInitialDate:'',
    expectedFinalDate:''
  },
  messages: {
    sucess: 'Sucesso!',
    createMessage: `${title} cadastrada com sucesso`,
    updateMessage: `${title} atualizada com sucesso`,
    confirm: 'CONTINUAR'
  }
};