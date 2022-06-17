import CategoryBtn from './CategoryBtn'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
   const defaultAvatar = 'https://banner2.cleanpng.com/20180920/yko/kisspng-computer-icons-portable-network-graphics-avatar-ic-5ba3c66df14d32.3051789815374598219884.jpg'
  return (
    <div className='sidebar'>
      <nav>
        <Link to='/dashboard'>
          <h3>Home</h3>
        </Link>
        <CategoryBtn />
        {/* need to figure out where to put routes for calendar and code snippets. */}
        <Link to='/calendar'> 
          <h3>Calendar</h3>
        </Link>
        <Link to='/code'>
          <h3>Code Snippets</h3>
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