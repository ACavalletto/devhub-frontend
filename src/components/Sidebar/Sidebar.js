import CategoryBtn from './CategoryBtn'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import settings from '../../assets/settings.svg'
import calendar from '../../assets/calendar.svg'
import code from '../../assets/code.svg'
import '../../style/sidebar.css'


const Sidebar = (props) => {
   const defaultAvatar = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
  return (
    <div className='sidebar'>
      <div className='user-sidebar'>
        <img className= "avatar-img" src={defaultAvatar} alt='user avatar' />
        {/* Pass name of user here */}
        <h5>Arnaud Cavalletto</h5>
        {/* Pass user title here */}
      </div>
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
      <div className='settings'>
        <Link to='/settings'>
          <button><img src={settings}/></button>
        </Link>
      </div>
      
    </div>
  )
}

export default Sidebar