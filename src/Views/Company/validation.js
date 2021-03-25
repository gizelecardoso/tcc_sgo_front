import * as yup from 'yup'
import { constantes } from "./constantes.js";

const fieldsValidation = yup.object().shape({
  companyCode: yup
  .string()
  .min(5, ({ min }) => `Código precisa ter no mínimo ${min} caracteres`)
  .required(constantes.code.error),
  companyName: yup
  .string()
  .required(constantes.name.error),
  companyBranch: yup
  .string()
  .required(constantes.branch.error)
})

export default fieldsValidation;