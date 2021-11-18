import React from 'react';
import {useSelector} from 'react-redux';
import Login from './Views/Pages/Login/login';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Sidebar from './Views/Sidebar/sidebar';
import ViewBugPage from './Views/Pages/viewBugs';
import CreateBug from './Views/Components/BugCreateEdit/bugForm';
import Dashboard from './Views/Pages/Dashboard/dashboard';
import './App.css';

function App() {
  const {auth} = useSelector(state => state)
  return (
    <Router>
        {!auth.LoggedIn ? <Login/>:
        <>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Dashboard />}></Route>
          <Route path="/viewBugs" element={<ViewBugPage />}></Route>
          <Route path="/createBugs" element={<div className='page-container'><CreateBug title="Create Bug"/></div>}></Route>
        </Routes>
        </>
        }
    </Router>
  );
}

export default App;
