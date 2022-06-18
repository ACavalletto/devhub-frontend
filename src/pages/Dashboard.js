import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/HeaderBar/Header'
import Category from './Category'
import { Link } from 'react-router-dom'
import '../style/dash.css'

const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {/* URI's are placeholders for now */}
      {/* <Link to='/a'>
        <Category />
      </Link>
      <Link to='/b'>
        <Category />
      </Link>
      <Link to='/c'>
        <Category />
      </Link> */}
      
    </div>
  )
}

export default Dashboard