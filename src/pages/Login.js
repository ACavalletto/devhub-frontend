import NavBar from '../components/NavBar'
import LoginForm from '../components/Forms/LoginForm'
import '../style/login.css'
import logo from '../assets/google.svg'
import { Link, useHistory } from 'react-router-dom'
import {login} from '../services/firebase';

const Login = (props) => {
  let history = useHistory();
  
  return (
    <div className="login">
      <NavBar />
      <LoginForm />
      <button className='google-btn' onClick={() => {login();history.push('/dashboard')}}>
        <img src={logo} alt='Google Logo' />
        Sign in with Google
      </button> {/* onclick(signInGoogle Firebase) */}
      <div className='signup-link'>
        <p>Don't have an account?
          <Link to='/signup'>
           Sign up for free.
          </Link>
        </p>
      </div>
    </div>
// login onclick inside forms
  )
}

export default Login
