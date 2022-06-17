import './App.css';
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      {/* Ternary conditional to render landing if user is not logged in on first page load user? route dashboard : route landing*/}
      <Route path='/welcome'> {/* potentially change URI to something else*/ }
        <Landing />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
    </>
  );
}

export default App;
