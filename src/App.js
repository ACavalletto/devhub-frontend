import './style/App.css';
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import {Route} from 'react-router'

function App() {
  return (
    <>
      {/* Ternary conditional to render landing if user is not logged in on first page load user? route dashboard : route landing*/}
      <Route path='/'> {/* potentially change URI to something else*/ }
        <Landing />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route
        path='/:category'
        render={(renderProps) => (
          <Category {...renderProps} />
        )}
      />
    </>
  );
}

export default App;
