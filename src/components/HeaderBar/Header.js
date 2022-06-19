import { Link } from 'react-router-dom'
import '../../style/header.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Header = (props) => {
  return (
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
      </div>
    </div>
  )
}

export default Header