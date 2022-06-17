import NavBar from '../components/NavBar'
import LoginForm from '../components/Forms/LoginForm'
import '../style/login.css'
import logo from '../assets/google.svg'
import { Link } from 'react-router-dom'

const Login = (props) => {
  return (
    <>
      <NavBar />
      <LoginForm />
      <button className='google-btn'>
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
    </>
// login onclick inside forms
  )
}

export default Login
