import { Link } from 'react-router-dom'
import style from '../style/navbar.module.css'
const NavBar = (props) => {
  return (
    <div className={style.nav_bar}>
      <div className={style.home}>
      <Link to='/'>
        {/* Links to landing page */}
        <div>DevHub</div>
        </Link>
      </div>
      <div className={style.login_signup}>
      {/* Wrap these links in ternary to display one or the other depending on whether you're on sign up page or login page */}
      <Link to='/login'>
        {/* Links to sign in page */}
        <div>Login</div>
      </Link>
      <Link to='/signup'>
        {/* Links to sign up page */}
        <div>Sign up</div>
        </Link>
        </div>


    </div>
  )
}

export default NavBar