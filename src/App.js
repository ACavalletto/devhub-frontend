import './style/App.css';
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import {Route} from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Snippets from './pages/Snippets'
import Todo from './pages/Todo'
function App() {
  return (
    <>
      {/* Ternary conditional to render landing if user is not logged in on first page load user? route dashboard : route landing*/}
      <Route exact path='/'> {/* potentially change URI to something else*/ }
        <Landing />
      </Route>
      <Route path='/dashboard'>
        <Dashboard />
      </Route>
      <Route
        path='/category/:category'
        render={(renderProps) => (
          <Category {...renderProps} />
        
        )} />
        <Route
        path='/login'>
          <Login/>
        </Route>
        <Route
        path='/signup'>
          <Signup/>
        </Route>
        <Route
        path='/snippets'> 
          <Snippets/>
        </Route>
        <Route
        path='/todo'>
          <Todo/>
        </Route>
        
    </>
  );
}

export default App;
