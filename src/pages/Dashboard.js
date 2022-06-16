import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/HeaderBar/Header'
import Signout from '../components/Signout'
const Dashboard = (props) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {/* dashboard render here */}
    </div>
  )
}

export default Dashboard