import Form from '../../elements/molecules/forms';
import Publicity from '../../elements/molecules/publicity';
import Container from './style';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import image from '../../projectPage/signin_image.png';
import Axios from 'axios';
import { useAuth } from '../auth';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const { setIsAuthenticated } = useAuth()
    const history = useHistory()
    const { register, unregister, handleSubmit, setValue, setError, clearErrors, formState: {errors} } = useForm()

    const login = (data) => {
        
        Axios({
            method: "POST",
            data: data,
            withCredentials: true,
            url: 'http://localhost:3001/api/login'
        })
        .then(res => {
            clearErrors()
            setIsAuthenticated(true)
            history.push('/info')})
        .catch(err => {
            setError("invalidData", {message: "Dados inválidos, tente novamente"})
        })
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
            required: "Por favor, digite sua senha"
        })

        return () => {
            unregister('email')
            unregister('password')
        }
    }, [register, unregister])

    return (
        <Container>
            <Form 
            width = '486px' 
            height = '440px' 
            textContent = 'Entre agora' 
            formCallback = {handleSubmit(login)}
            inputs = {[
                {pholder: "Email", inputCallback: (e) => setValue("email", e.target.value), type: undefined}, 
                {pholder: "Senha", inputCallback: (e) => setValue("password", e.target.value), type: "password"}
            ]}
            buttonCallback = {() => clearErrors('invalidData')}
            error = {errors}
            />
            <Publicity img = {image} textContent = {["Vitto cash machine", "O seu dinheiro mais seguro"]}/>
        </Container>
    )
}

export default LoginPage