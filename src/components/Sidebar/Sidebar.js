import CategoryBtn from './CategoryBtn'
import { Link } from 'react-router-dom'
import home from '../../assets/home.svg'
import settings from '../../assets/settings.svg'
import calendar from '../../assets/calendar.svg'
import code from '../../assets/code.svg'
import style from '../../style/sidebar.module.css'


const Sidebar = (props) => {
  const {user:{displayName, photoURL}} = props
   const defaultAvatar = 'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
  return (
    <div className={style.sidebar}>
      <div className={style.user_sidebar}>
        <img className= {style.avatar_img} src={props.user?photoURL:defaultAvatar} alt='user avatar' />
        <h5>{displayName}</h5>
      </div>
      <nav>
        <Link to='/dashboard'>
<button className= {style.sidebar_btn}><img src={home}/></button>
        </Link>
        <CategoryBtn />
        {/* need to figure out where to put routes for calendar and code snippets. */}
        <Link to='/calendar'> 
        <button className= {style.sidebar_btn}><img src={calendar}/></button>
        </Link>
        <Link to='/code'>
        <button className= {style.sidebar_btn}><img src={code}/></button>
        </Link>
      </nav>
      <div className={style.settings}>
        <Link to='/settings'>
          <button className= {style.sidebar_btn}><img src={settings}/></button>
        </Link>
      </div>
      
    </div>
  )
}

export default Sidebar