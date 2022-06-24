import { Link } from 'react-router-dom'
import style from '../../style/header.module.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import { logout } from '../../services/firebase'
import {useHistory} from 'react-router-dom'
const Header = (props) => {
  const history = useHistory()
  
  return (
    <>
      {props.user ?
        <div className={style.header}>
      <Link to='/dashboard'>
        <h3>DevHub</h3>
      </Link>
      <div className={style.links}>
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