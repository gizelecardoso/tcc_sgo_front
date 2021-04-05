import * as yup from 'yup'
import { constantes } from "./constantes.js";

const fieldsValidation = yup.object().shape({
  roleCode: yup
  .string()
  .min(5, ({ min }) => `Código precisa ter no mínimo ${min} caracteres`)
  .required(constantes.code.error),
  roleName: yup
  .string()
  .required(constantes.name.error),
  roleDescription: yup
  .string()
  .required(constantes.description.error)
})

export default fieldsValidation;