import './App.css';
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <>
      {/* Ternary conditional to render landing if user is not logged in on first page load */}
      <Landing />
      <Dashboard />
    </>
  );
}

export default App;
