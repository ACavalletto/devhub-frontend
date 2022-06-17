import { Link } from 'react-router-dom'
const NavBar = (props) => {
  return (
    <div className='nav-bar'>
      <Link to='/'>
        {/* Links to landing page */}
        <div>DevHub</div>
      </Link>

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
  )
}

export default NavBar