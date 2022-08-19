import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/register';
import UserDashboard from './pages/User/userDashboard';
import Temp from './pages/temp';
import Landing from './pages/LandingPage';
import UserProfile from './pages/User/userProfile';
import MyQueries from './pages/User/userQueries';
import GrievanceForm from './components/greivanceForm';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/temp" element={<Temp />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userdashboard" element={<UserDashboard />} />
      <Route path="/userdashboard/form" element={<GrievanceForm/>}/>
      <Route path="/myqueries" element={<MyQueries />} />
      <Route path="/profile" element={<UserProfile />} />
      </Routes>
      </BrowserRouter>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
