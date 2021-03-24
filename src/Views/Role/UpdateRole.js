import React, { Fragment, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { Cabecalho } from "../../Components/Cabecalho";
import InputValues from "../../Components/Input/InputValues.js";
import update from "../../services/api/Role/update_role_api";
import { constantes } from "./constantes.js";
import fieldsValidation from './validation';
import estilo from "./estilo";
import estiloButton from "../../estilo";

const UpdateRole = (props) => {
    const [errorMessage, setErrorMessage] = useState('');

    const tryUpdate = async(values) =>{
        try{
            await update(values, props.route.params.id);
            props.navigation.push(constantes.mainList);
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    const initialValues = {
        roleCode: props.route.params.role_code, 
        roleName: props.route.params.role_name, 
        roleDescription: props.route.params.role_description
    }

    return(
        <Fragment>
            <Cabecalho title={constantes.titleUpdate} navigation={props.navigation} page={constantes.mainList}/>
            <Formik
                validationSchema={fieldsValidation} 
                initialValues={initialValues}
                onSubmit={async (values, { resetForm }) => {
                    await tryUpdate(values)
                    resetForm()
                  }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                    <View style={estilo.container}>
                        <InputValues 
                            title={constantes.code.title} 
                            name={constantes.code.name} 
                            placeholder={constantes.code.placeholder}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors[constantes.code.attribute]}
                            touched={touched[constantes.code.attribute]}
                            values={values[constantes.code.attribute]}
                        />
                        <InputValues 
                            title={constantes.name.title} 
                            name={constantes.name.name} 
                            placeholder={constantes.name.placeholder}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors[constantes.name.attribute]}
                            touched={touched[constantes.name.attribute]}
                            values={values[constantes.name.attribute]}
                        />
                        <InputValues 
                            title={constantes.description.title} 
                            name={constantes.description.name} 
                            placeholder={constantes.description.placeholder}
                            handleChange={handleChange}
                            handleBlur={handleBlur}
                            errors={errors[constantes.description.attribute]}
                            touched={touched[constantes.description.attribute]}
                            values={values[constantes.description.attribute]}
                        />
                        
                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <Text style={estiloButton.submit}>{constantes.buttomAtualizar}</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </Formik>
        </Fragment>
    );

}

export default UpdateRole;