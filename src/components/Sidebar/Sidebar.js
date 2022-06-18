import CategoryBtn from './CategoryBtn'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'

import calendar from '../../assets/calendar.svg'
import code from '../../assets/code.svg'
import '../../style/sidebar.css'


const Sidebar = (props) => {
   const defaultAvatar = 'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'
  return (
    <div className='sidebar' style={{ background: 'black' }}>
      <nav>
        <Link to='/dashboard'>
          <button><img src={home}/></button>
        </Link>

        <CategoryBtn />
        {/* need to figure out where to put routes for calendar and code snippets. */}
        <Link to='/calendar'> 
        <button><img src={calendar}/></button>
        </Link>
        <Link to='/code'>
        <button><img src={code}/></button>
        </Link>
      </nav>
      <div className='user-sidebar'>
        <img src='defaultAvatar' alt='user avatar' />
        {/* Pass name of user here */}
        <h3>John Doe</h3>
        {/* Pass user title here */}
        <h3 className='title'>Developer</h3>
      </div>
    </div>
  )
}

export default Sidebar