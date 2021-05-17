import Form from '../../elements/molecules/forms';
import Publicity from '../../elements/molecules/publicity';
import Container from './style';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import image from '../../projectPage/operations_image.png';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useFormCall } from '../auth/formContext';
import WithdrawCard from '../../elements/molecules/withdrawCard';
import withdrawService from './service';
import { useAuth } from '../auth';

const OperationPage = () => {
    const { userInformation } = useAuth()
    const { amount, setAmount } = useFormCall()
    const [withdraw, setIsWithdraw] = useState({shouldRender: false, cedules: []})

    const history = useHistory('')

    const { register, unregister, handleSubmit, setValue, setError, clearErrors, formState: {errors} } = useForm()
    
    const execute = (data) => {
        clearErrors()
        setAmount('')
        if (userInformation.balance >= parseInt(data.value) && data.type === 'saque' || data.type === 'depósito'){
            return (
                Axios({
                    method: "PUT",
                    data: {...data, amount: data.type === 'saque' ? parseInt(data.value, 10) * -1: parseInt(data.value, 10)},
                    withCredentials: true,
                    url: 'http://localhost:3001/api/operations'
                })
                .then(res => {
                    console.log(res)
                    if (res.data.operation.type === 'depósito'){
                        return history.push('/info')
                    }
                    const values = withdrawService(-1 * res.data.operation.amount)
                    return setIsWithdraw({shouldRender: true, cedules: values})
                })
                .catch(error => {
                    console.log(error.response)
                    if (error.response && error.response.status === 400){
                        return setError('invalidData', {message: "O CPF informado não te pertence"})
                    }
                    setError('invalidData', {message: 'Algo inesperado aconteceu, tente novamente mais tarde'})
                    setAmount(amount)
                })
            )
        }
        return setError('invalidData', {message: "Saldo insuficiente"})
    } 

    useEffect(() => {
        register("type", {
            required: "Por favor, selecione uma operação",
        })
        register("cpf", {
            required: "Por favor, digite o CPF",
            pattern: {
                value: /^(([0-9]{11}))$/,
                message: "Formato de CPF inválido, digite apenas os numeros"
            }
        })
        register("value", {
            required: "Por favor, digite um valor",
            pattern: {
                value: /[0-9]/,
                message: "Ops!, apenas números inteiros nesse campo"
            }
        })

        return () => {
            unregister('type')
            unregister('cpf')
            unregister('value')
        }
    }, [register, unregister])

    return (
        withdraw.shouldRender ?
        <WithdrawCard cedules = {withdraw.cedules}/> :
        <Container>
            <Form 
            width = '486px' 
            height = '489px' 
            formCallback = {handleSubmit(execute)}
            select = {{
                selectCallback: (e) => setValue("type", e.target.value), 
                options: ["Depósito", "Saque"]
            }}
            inputs = {[
                {pholder: "CPF", 
                inputCallback: (e) => {
                    setValue("cpf", e.target.value)
                }, 
                type: undefined},
                {pholder: "Valor", 
                inputCallback: (e) => {
                    setAmount(e.target.value)
                    setValue("value", e.target.value)
                }, 
                type: undefined, 
                value: !amount ? '' : undefined}
            ]}
            error = {errors}
            />
            <Publicity img = {image} width = "750px" height = "411px"/>
        </Container>
    )
}

export default OperationPage