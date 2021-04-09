import * as yup from 'yup'
import { constantes } from "./constantes.js";

const fieldsValidation = yup.object().shape({
  activityCode: yup
  .string()
  .min(5, ({ min }) => `Código precisa ter no mínimo ${min} caracteres`)
  .required(constantes.code.error),
  activityName: yup
  .string()
  .required(constantes.name.error),
  activityDescription: yup
  .string()
  .required(constantes.description.error),
  expectedInitialDate: yup
  .string()
  .required(constantes.expectedInitialDate.error),
  expectedFinalDate: yup
  .string()
  .required(constantes.expectedFinalDate.error)
})

export default fieldsValidation;