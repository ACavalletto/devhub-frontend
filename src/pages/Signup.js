import NavBar from '../components/NavBar'
import SignUpForm from '../components/Forms/SignUpForm'

const Signup = (props) => {
  return (
    <>
      <NavBar />
      <SignUpForm />
      <button>Sign in with Google</button> {/*onclick(signUpGoogle) */ }
    </>
  )
}

export default Signup