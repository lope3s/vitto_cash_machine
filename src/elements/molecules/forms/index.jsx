import FormComponent from './style';
import Input from '../../atoms/input';
import Button from '../../atoms/button';
import Text from '../../atoms/textField';
import Select from '../../atoms/select';
import { useHistory } from 'react-router-dom';
import { FormProvider } from '../../../components/auth/formContext'

const Form = (props) =>{
    const history = useHistory()

    return (
        <FormProvider>
            <FormComponent width = {props.width} height = {props.height} onSubmit = {props.formCallback}>
                <div className = 'inputs'>
                    {
                        props.textContent &&
                        <Text alterFont = "true" size = "1.8rem" content = {props.textContent} color = "#fff" className = "text" margin = "10px"/>
                    }
                    {
                        props.select &&
                        <Select margin = "3vh 0" callback = {props.select.selectCallback} options = {props.select.options}/>
                    }
                    {
                        props.inputs.map(({pholder, inputCallback, type, value}, index) => (
                            <Input key = {index} placeholder = {pholder} margin = "3vh 0" callback = {inputCallback} type = {type} value = {value}/>
                        ))
                    }
                </div>
                <Button 
                content = {
                    history.location.pathname === '/' ? 
                    'Login': history.location.pathname === '/cadastro' ? 
                    "Cadastrar" : history.location.pathname === '/operacoes' ? 
                    "Executar" : 'Continuar'} 
                    type = 'submit'/>
                {
                    props.error.email &&
                    <Text content = {props.error.email.message} color = '#C30202' margin = "5px" />
                }
                {
                    props.error.password &&
                    <Text content = {props.error.password.message} color = '#C30202' margin = "5px" />
                }
                {
                    props.error.cpf &&
                    <Text content = {props.error.cpf.message} color = '#C30202' margin = "5px" />
                }
                {
                    props.error.invalidData &&
                    <Text content = {props.error.invalidData.message} color = '#C30202' margin = "5px" />
                }
                {
                    props.error.value &&
                    <Text content = {props.error.value.message} color = '#C30202' margin = "5px" />
                }            {
                    props.error.operation &&
                    <Text content = {props.error.operation.message} color = '#C30202' margin = "5px" />
                }

            </FormComponent>
        </FormProvider>
    )
} 

export default Form