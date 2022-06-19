import NavBar from '../components/NavBar'
import SignUpForm from '../components/Forms/SignUpForm'
import '../style/signup.css'
import logo from '../assets/google.svg'


const Signup = (props) => {
  return (
    <div className='signup'>
      <NavBar />
      <SignUpForm />
      <button className='google-btn'>
          <img src={logo} alt='Google Logo'/>
          Sign in with Google
      </button> {/*onclick(signUpGoogle) */}
    </div>
  )
}

export default Signup