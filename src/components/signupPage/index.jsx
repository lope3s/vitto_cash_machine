import Form from '../../elements/molecules/forms';
import Publicity from '../../elements/molecules/publicity';
import Container from './style';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import image from '../../projectPage/signup_image.png';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const SignUpPage = () => {
    const history = useHistory()

    const { register, unregister, handleSubmit, setValue, setError, formState: {errors} } = useForm()

    const login = (data) => {
        axios.post('http://localhost:3001/api/signup', data).then(res => history.push('/')).catch(err => setError("invalidData", {message: "Algo inesperado aconteceu, tente novamente mais tarde"}))
    } 

    useEffect(() => {
        register("email", {
            required: "Por favor, digite um email",
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Formato de email inválido "
            }
        })
        register("password", {
            required: "Por favor, digite uma senha"
        })
        register("cpf", {
            required: "Por favor, digite o CPF",
            pattern: {
                value: /^(([0-9]{11}))$/,
                message: "Formato de CPF inválido, digite apenas os numeros"
            }
        })

        return () => {
            unregister('email')
            unregister('password')
            unregister('cpf')
        }
    }, [register, unregister])

    return (
        <Container>
            <Form 
            width = '486px' 
            height = '489px' 
            textContent = 'Cadastre-se agora' 
            formCallback = {handleSubmit(login)}
            inputs = {[
                {pholder: "Email", inputCallback: (e) => setValue("email", e.target.value), type: undefined}, 
                {pholder: "Senha", inputCallback: (e) => setValue("password", e.target.value), type: "password"},
                {pholder: "CPF", inputCallback: (e) => setValue("cpf", e.target.value), type: undefined}
            ]}
            error = {errors}
            />
            <Publicity img = {image} textContent = {["Não tem uma conta vitto?!", "Cadastre-se agora, é rápido e não tem chá de cadeira!"]}/>
        </Container>
    )
}

export default SignUpPage