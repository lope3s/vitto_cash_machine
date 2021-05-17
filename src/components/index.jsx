import { Switch, Route } from 'react-router-dom';
import LoginPage from '../components/loginPage';
import SignUpPage from '../components/signupPage';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../components/auth';
import InfoPage from './infoPage';
import OperationPage from './operationPage'
import { FormProvider } from '../components/auth/formContext'
import ExtractPage from '../components/extractPage'

const Router = () => {
    const history = useHistory()
    const { isAuthenticated } = useAuth()

    return (
        <Switch>
            <Route exact path = '/'>
                <LoginPage/>
            </Route>
            <Route path = '/cadastro'>
                <SignUpPage/>
            </Route>
            <Route path = '/info'>
                {!isAuthenticated && history.push('/')}
                <InfoPage/>
            </Route>
            <Route path = '/operacoes'>
                {!isAuthenticated && history.push('/')}
                <FormProvider>
                    <OperationPage/>
                </FormProvider>
            </Route>
            <Route path = '/extrato'>
                {!isAuthenticated && history.push('/')}
                <ExtractPage/>
            </Route>
        </Switch>
    )
}

export default Router