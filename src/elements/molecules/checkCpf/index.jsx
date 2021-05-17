import Container from './style';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../components/auth';
import Form from '../../molecules/forms';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const CheckCpf = () =>{
    const { userInformation } = useAuth()
    const history = useHistory()

    const { register, unregister, handleSubmit, setValue, setError, clearErrors, formState: {errors} } = useForm()


    const handleCpf = (data) => {
        if(userInformation.cpf !== data.cpf){
            return setError('invalidData', {message: "CPF inválido, tente novamente"})
        }
        clearErrors('invalidData')
        history.push('/extrato')
    }

    useEffect(() => {
        register("cpf", {
            required: "Por favor, digite o CPF",
            pattern: {
                value: /^(([0-9]{11}))$/,
                message: "Formato de CPF inválido, digite apenas os numeros"
            }
        })

        return () => {
            unregister('cpf')
        }
    }, [register, unregister])

    return (
        <Container>
            <Form
            width = "400px" 
            height = "250px" 
            textContent = "Verificacão do CPF" 
            formCallback = {handleSubmit(handleCpf)} 
            inputs = {[{pholder: "Digite seu CPF", inputCallback: (e) => setValue('cpf', e.target.value), type: undefined}]}
            error = {errors}
            />
        </Container>
    )
}

export default CheckCpf