import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/login";
import Register from "./pages/register";
import UserDashboard from "./pages/User/userDashboard";
import Temp from "./pages/temp";
import Landing from "./pages/LandingPage";
import UserProfile from "./pages/User/Profile";
import MyQueries from "./pages/User/MyQueries";
import GrievanceForm from "./components/greivanceForm";
import "react-toastify/dist/ReactToastify.css";

import AdminDashboard from "./pages/Admin/AdminDashboard";
import ResolverDashboard from "./pages/Resolver/ResolverDashboard";
import ResolverSPOC from "./pages/Resolver/ResolverSPOC";
import ResolverUser from "./pages/Resolver/ResolverUser";
import NewModule from "./pages/Admin/NewModule";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
import {ToastContainer} from "react-toastify";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/temp" element={<Temp />} />
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/verify" element={<EmailVerify />} />
          <Route path="/reset" element={<ResetPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />

          <Route path="/resolver" element={<ResolverDashboard />} />

          <Route path="/dashboard" element={<UserDashboard />} />

          <Route path="/userdashboard/form" element={<GrievanceForm />} />
          <Route path="/myqueries" element={<MyQueries />} />
          <Route path="/profile" element={<UserProfile />} />

          <Route path="/resolverSPOC" element={<ResolverSPOC />} />
          <Route path="/resolverUser" element={<ResolverUser />} />

          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/newmod" element={<NewModule />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>

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
