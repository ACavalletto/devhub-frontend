import NavBar from '../components/NavBar'
import SignUpForm from '../components/Forms/SignUpForm'
import style from '../style/signup.module.css'
import logo from '../assets/google.svg'


const Signup = (props) => {
  return (
    <div className={style.signup}>
      <NavBar />
      <SignUpForm />
      <button className={style.google_btn}>
          <img src={logo} alt='Google Logo'/>
          Sign in with Google
      </button> {/*onclick(signUpGoogle) */}
    </div>
  )
}

export default Signup

// '..SignUpForm/components/forms/SignUpForm'