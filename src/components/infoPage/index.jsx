import Text from '../../elements/atoms/textField';
import Button from '../../elements/atoms/button';
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { useAuth } from '../auth';
import Container from './style';
import { useHistory } from 'react-router-dom';
import CheckCpf from '../../elements/molecules/checkCpf'

const InfoPage = () => {
    const history = useHistory()
    const { userInformation, setUserInformation } = useAuth() 
    const [checkCpf, setCheckCpf] = useState(false)

    useEffect(() => {
        Axios({
            method: "GET",
            withCredentials: true,
            url: 'http://localhost:3001/api/user'
        }).then(res =>setUserInformation(res.data)).catch(err => console.log(err))
    }, [setUserInformation])

    return (
        checkCpf ?
        <CheckCpf/> :
        <Container>
            <Text content = {[`Cliente nª: ${userInformation.id && userInformation.id.toString().padStart(3, '0')}`]} size = "1.5rem" className = "text"/>
            <Text content = {[`CPF: ${userInformation.cpf && userInformation.cpf.substring(0, 3)}.xxx.xxx-xx`]} size = '1.5rem' className = "text"/>
            <Text content = {['SALDO TOTAL']} size = '1.5rem' bold = '550' className = "text"/>
            <hr/>
            <Text content = {[`R$ ${userInformation.balance},00`]} size = '1.8rem' bold = "bold" className = "amount"/>
            <div className = 'buttonBox'>
                <Button content = "Depósito/Saque" callback = {() => history.push('/operacoes')}/>
                <Button content = "Extrato" callback = {() => setCheckCpf(true)}/>
            </div>
        </Container>
    )

}

export default InfoPage