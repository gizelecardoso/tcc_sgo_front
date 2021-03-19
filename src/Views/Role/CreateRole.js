import React, { Fragment, useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import estilo from "./estilo.js";
import createRole from "../../services/api/Role/role_api";
import roleApi from "../../services/api/Role/api_role"
import { Cabecalho } from "../../Components/Cabecalho";
import { Formik } from "formik";
import fieldsValidationRole from './validation';

const CreateRole = ({ navigation }) => {
    const [errorMessage, setErrorMessage] = useState('');

    const tryCreateRole = async(values) =>{
        try{
            await createRole(values);
            navigation.push('Roles');
        } catch(erro) {
            setErrorMessage(erro.mensagem);
        }
    }

    return(
        <Fragment>
            <Cabecalho title={'Cadastrar Funções'} navigation={navigation} page={'Roles'}/>
            <Formik
                validationSchema={fieldsValidationRole} 
                initialValues={{ roleCode: '', roleName: '', roleDescription: '' }}
                onSubmit={async (values, { resetForm }) => {
                    await tryCreateRole(values)
                    resetForm()
                  }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
                    <View style={estilo.container}>
                        <View style={estilo.input_container} >
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Código Função</Text>
                            <TextInput
                                name='roleCode'
                                placeholder='Digite o número da Função'
                                style={estilo.input_text} 
                                onChangeText={handleChange('roleCode')}
                                onBlur={handleBlur('roleCode')}
                                value={values.roleCode}
                            />
                            {(errors.roleCode && touched.roleCode) &&
                                <Text style={{ fontSize: 15, color: 'red', fontWeight:'bold', textAlign: 'center' }}>{errors.roleCode}</Text>
                            }
                        </View>
                        <View style={estilo.input_container} >
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Código da Função</Text>
                            <TextInput
                                name='roleName'
                                placeholder='Digite o nome da Função'
                                style={estilo.input_text} 
                                onChangeText={handleChange('roleName')}
                                onBlur={handleBlur('roleName')}
                                value={values.roleName}
                            />
                            {(errors.roleName && touched.roleName) &&
                                <Text style={{ fontSize: 15, color: 'red', fontWeight:'bold', textAlign: 'center' }}>{errors.roleName}</Text>
                            }
                        </View>
                        <View style={estilo.input_container} >
                            <Text style={{fontSize:15, fontWeight:'bold'}}>Descrição da Função</Text>
                            <TextInput
                                name='roleDescription'
                                multiline = {true}
                                numberOfLines = {4}
                                style={estilo.input_area} 
                                placeholder='Digite a descrição da Função'
                                onChangeText={handleChange('roleDescription')}
                                onBlur={handleBlur('roleDescription')}
                                value={values.roleDescription}
                            />
                             {(errors.roleDescription && touched.roleDescription) &&
                                <Text style={{ fontSize: 15, color: 'red', fontWeight:'bold', textAlign: 'center' }}>{errors.roleDescription}</Text>
                            }
                        <Text style={{ fontSize: 15, color: 'red', fontWeight:'bold', textAlign: 'center' }}>{errorMessage}</Text>
                        </View>
                        <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                            <Text style={estilo.submit}>Inserir Função</Text>
                        </TouchableOpacity>
                    </View>
                )}

            </Formik>
        </Fragment>
    );

}

export default CreateRole;