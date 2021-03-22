import * as yup from 'yup'
import { constantes } from "./constantes.js";

const fieldsValidation = yup.object().shape({
  loginName: yup
  .string()
  .required(constantes.loginName.error),
  password: yup
  .string()
  .required(constantes.password.error)
})

export default fieldsValidation;