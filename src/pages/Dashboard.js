import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/HeaderBar/Header'
import Category from './Category'
import { Link } from 'react-router-dom'
import style from '../style/dash.module.css' 
// check linking for main rectangle frame/ check css style importing between dash/category
<<<<<<< HEAD
  
  


const Dashboard = (props) => 
{
  console.log(props.user)

=======
const Dashboard = (props) => {
>>>>>>> 2fa2c325dafd7955b76e40c09f968229b3c4bc0a
  return (
    <div className={style.dashboard}>
      <div className={style.header_container}>
      <Header user={props.user} />
      </div>
      <div className={style.sidebar_container}>
        <Sidebar user={props.user} />
      </div>
      {/* URI's are placeholders for now */}
<<<<<<< HEAD
      <Link to='/categorya'>
        <Category />
      </Link>
      <Link to='/categoryb'>
        {/* <Category /> */}
      </Link>
      <Link to='/categoryc'>
        {/* <Category /> */}
      </Link>

    </div>
=======
      <div className={style.categories}>
      <div className={style.category_container}>
      <Link to='/categorya'>
        <Category />
        </Link>
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
>>>>>>> 2fa2c325dafd7955b76e40c09f968229b3c4bc0a
  )
}

export default Dashboard