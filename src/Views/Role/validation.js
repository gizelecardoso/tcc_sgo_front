import * as yup from 'yup'

const fieldsValidationRole = yup.object().shape({
  roleCode: yup
  .string()
  .min(5, ({ min }) => `Código precisa ter no mínimo ${min} caracteres`)
  .required('O código da função não pode ser vazio'),
  roleName: yup
  .string()
  .required('O nome da função não poder ser vazio'),
  roleDescription: yup
  .string()
  .required('A descrição da função não poder ser vazia')
})

export default fieldsValidationRole;