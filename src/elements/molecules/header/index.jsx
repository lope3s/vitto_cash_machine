import Button from '../../atoms/button';
import Text from '../../atoms/textField';
import HeaderComponent from './style';
import { useLocation, useHistory } from 'react-router-dom';
import { useAuth } from '../../../components/auth'
import axios from 'axios'

const Header = () => {
    const location = useLocation()
    const history = useHistory()
    const { isAuthenticated } = useAuth()

    const logout = () => {
        axios.get('http://localhost:3001/api/logout').catch(err => console.log(err))
    }

    const renameButton = (callback) => {
        if(location.pathname === '/') {
            return history.push("/cadastro")
        }
        if(location.pathname === '/cadastro'){
            return history.push("/")
        }
        if(isAuthenticated){
            callback()
            return history.push("/")
        }
    }

    return (
        <HeaderComponent>
            <Text isTitle = "true" size = '2rem' content = 'Vitto Cash Machine' alterFont = "true"/>
            <Button 
            content = {location.pathname === '/' ? "Cadastre-se" : location.pathname === '/cadastro' ? "Entrar" : isAuthenticated && "Sair"}
            callback = {() => renameButton(logout)}/>
        </HeaderComponent>
    )
}

export default Header