import Button from '../../atoms/button';
import Text from '../../atoms/textField';
import WithdrawContainer from './style';
import { useHistory } from 'react-router-dom';

const WithdrawCard = ({cedules}) => {
    const history = useHistory()

    return (
        <WithdrawContainer>
            <Text content = "Suas Notas:" size = "2rem" alterFont = "true" color = "#fff"/>
            {cedules &&
            cedules.map(({cedule, quantity}, index) => (
                <Text content = {`R$ ${cedule} x ${quantity}`} key = {index} size = "1.8rem" color = "#fff" bold = "bold" margin = "10px"/>
            ))}
            <Button callback = {() => history.push('/info')} content = "Continuar"/>
        </WithdrawContainer>
    )
}

export default WithdrawCard