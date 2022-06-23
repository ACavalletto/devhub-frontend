import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/HeaderBar/Header'
import Category from './Category'
import { Link } from 'react-router-dom'
import style from '../style/dash.module.css' 
// check linking for main rectangle frame/ check css style importing between dash/category
const Dashboard = ({ URL, user }) => {
  return (
    <div className={style.dashboard}>
      <div className={style.header_container}>
      <Header user={user} />
      </div>
      <div className={style.sidebar_container}>
        <Sidebar user={user} />
      </div>
      {/* URI's are placeholders for now */}
      <div className={style.categories}>
        <div className={style.category_container}>
        <h4>Category A</h4>
          <Category user={user.displayName} id={user.uid} URL={URL} category='a'/>
      </div>
      <div className={style.category_container}>
      <Link to='/categoryb'>
        <Category />
          </Link>
          </div>
        <div className={style.category_container}>
      <Link to='/categoryc'>
        <Category />
          </Link>
          </div>
      </div>
      </div>
  )
}

export default Dashboard