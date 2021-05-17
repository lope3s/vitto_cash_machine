import Router from './components'
import './global.css'
import Header from './elements/molecules/header'
import { AuthProvider } from './components/auth'

function App() {

  return (
    <div className = "body">
      <AuthProvider>
        <Header/>
        <Router/>
      </AuthProvider>
    </div>
  );
}

export default App;