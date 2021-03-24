import * as yup from 'yup'
import { constantes } from "./constantes.js";

const fieldsValidation = yup.object().shape({
  officialCode: yup
  .string()
  .min(5, ({ min }) => `Código precisa ter no mínimo ${min} caracteres`)
  .required(constantes.code.error),
  officialName: yup
  .string()
  .required(constantes.name.error)
})

export default fieldsValidation;