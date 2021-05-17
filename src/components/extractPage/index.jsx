import ExtractComponent from './style';
import Button from '../../elements/atoms/button';
import Text from '../../elements/atoms/textField';
import Axios from 'axios';
import { useAuth } from '../auth'
import { useState, useEffect } from 'react';
import OperationCard from '../../elements/molecules/operationsCards';
import { useHistory } from 'react-router-dom';

const ExtractPage = () => {
    const { userInformation } = useAuth()
    const [balance, setBalance] = useState(0)
    const [extract, setExtract] = useState([])
    const history = useHistory()

    useEffect(() => {
        Axios({
            method: "POST",
            data: {
                cpf: userInformation.cpf
            },
            withCredentials: true,
            url: 'http://localhost:3001/api/extract'
        })
        .then(res => {
            console.log(res)
            setBalance(res.data.balance)
            setExtract(res.data.operations)
        })
        .catch(err => console.log(err.response))
    }, [userInformation.cpf])

    return (
        <ExtractComponent>
            <Button content = "Voltar" callback =  {() => history.push('/info')}/>
            <div className = "information">
                <Text content = "Saldo" size = '1.5rem' bold = "bold" margin = "3vh 0 0 1vw"/>
                <Text content = {`R$${balance},00`} margin = "3vh 1vw 0 0" size = '1.5rem' bold = "bold"/>
            </div>
            <hr/>
            <div className = 'operations'>
                {
                    extract && 
                    extract.map(({id, type, date, amount}, index) => (
                        <OperationCard key = {index} num = {id} value = {amount} date = {date} type = {type}/>
                    ))
                }         
            </div>
        </ExtractComponent>
    )
}

export default ExtractPage