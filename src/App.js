import './style/App.module.css';
import { useState, useEffect} from "react";
import { auth } from "./services/firebase";
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import {Route} from 'react-router'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Snippets from './pages/Snippets'
import Todo from './pages/Todo'
import ForgotPW from './pages/ForgotPW'

function App() {
  const [user, setUser] = useState(null);
  useEffect(()=> {
    const unsubscribe= auth.onAuthStateChanged(user => setUser(user));
    return () => {
      unsubscribe();
    }
  }, []);
  const URL= 'http://localhost:4000/'
  return (
    <>
      {/* Ternary conditional to render landing if user is not logged in on first page load user? route dashboard : route landing*/}
      {user? <Route path='/'>
        <Dashboard user={user} URL={URL} />
      </Route>: <Route exact path='/'>
        <Landing />
      </Route> }
      <Route
        path='/category/:category'
        render={(renderProps) => (
          <Category {...renderProps} user={user} URL={URL} />
        
        )} />
        <Route
        path='/login'>
          <Login user={user}/>
        </Route>
        <Route
        path='/signup'>
          <Signup  user={user} />
        </Route>
        <Route
        path='/snippets'> 
          <Snippets/>
        </Route>
        <Route
        path='/todo'>
          <Todo/>
        </Route>
        <Route
        path='/forgot'>
          <ForgotPW />
        </Route>
        
    </>
  );
}

export default App;
