import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import DashBoard from './pages/dashboard/DashBoard';
import Loginpage from './pages/loginPage/Loginpage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact>
        <Loginpage />
        </Route>
        <Route path='/dashboard'>
        <DashBoard />
        </Route>
      </Router>
      
     
    </div>
  );
}

export default App;
