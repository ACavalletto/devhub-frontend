import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/HeaderBar/Header'
import Category from './Category'
import { Link } from 'react-router-dom'
import style from '../style/dash.module.css' 
// check linking for main rectangle frame/ check css style importing between dash/category
  
  


const Dashboard = (props) => 
{
  console.log(props.user)

  return (
    <div>
      <Header user={props.user} />
      <Sidebar user={props.user} />
      {/* URI's are placeholders for now */}
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
  )
}

export default Dashboard