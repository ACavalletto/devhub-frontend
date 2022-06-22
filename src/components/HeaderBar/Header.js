import { Link } from 'react-router-dom'
import '../../style/header.modules.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { logout } from '../../services/firebase'
import {useHistory} from 'react-router-dom'
const Header = (props) => {
  const history = useHistory()
  
  return (
    <>
      {props.user ?
        <div className='header'>
      <Link to='/dashboard'>
        <h4>DevHub</h4>
      </Link>
      <div className='links'>
        <a href='https://github.com/' target='_blank' rel='noreferrer'>
          <img src={github} alt='github icon' />
        </a>
        <a href='https://linkedin.com/' target='_blank' rel='noreferrer'>
          <img src={linkedin} alt='linkedin icon' />
        </a>
        <button onClick={logout}>Logout</button>
      </div>
        </div>
        : history.push('/')
      }
      </>
  )
}

export default Header