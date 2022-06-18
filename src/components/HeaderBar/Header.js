import { Link } from 'react-router-dom'
import '../../style/header.css'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

const Header = (props) => {
  return (
    <div className='header'>
      <div className='site-name'>
        <h4>DevHub</h4>
      </div>
      <div className='links'>
        <Link to='github.com'>
          <img src={github} alt='github icon' />
          <img src={linkedin} alt='linkedin icon' />
        </Link>
      </div>
    </div>
  )
}

export default Header