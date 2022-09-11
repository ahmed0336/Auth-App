import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route ,Routes } from "react-router-dom";
import './App.css';
import {Loader} from 'react-overlay-loader';
import 'bootstrap/dist/css/bootstrap.min.css';

// loader css
// import lazy loader
import 'react-overlay-loader/styles.css';
import { lazy,Suspense } from 'react';
import { Helmet } from 'react-helmet';
// import MaterialTable from './pages/MTable';


const Colorpicker = lazy  ( () => import('./pages/Colorpicker') ) ;

const Header = lazy ( () => import('./Components/Header'));
const VerifyCode = lazy ( () => import('./pages/VerifyCode'));
const Newpassword = lazy ( () => import('./pages/Newpassword'));

const Home = lazy ( () => import('./pages/Home'));
const Service = lazy ( () => import('./pages/Service'));
const Friends = lazy ( () => import('./pages/Friends'));
const Signup = lazy ( () => import('./pages/Signup'));
const FriendProfile = lazy ( () => import('./pages/FriendProfile'));
const ForgetPassword = lazy ( () => import('./pages/ForgetPassword'));
const Login = lazy ( () => import('./pages/Login'));
const MTable = lazy ( () => import('./pages/MTable'));



// import Home from "./pages/Home"
// import Header from './Components/Header';
// import VerifyCode from './pages/VerifyCode';
// import Newpassword from './pages/Newpassword';
// import Login from './pages/Login';
// import Service from './pages/Service';
// import Friends from './pages/Friends';
// import Signup from './pages/Signup';
// import FriendProfile from './pages/FriendProfile';
// import ForgetPassword from './pages/ForgetPassword';



function App() {
  return (
     <Suspense fallback={<Loader fullPage loading />} >
    <div className="App">
      <Router>
        <Helmet >
           <title>Counter App</title>
          </Helmet>
      {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/service" element={<Service />} />
          <Route  path="/signup" element={<Signup />} />
          <Route  path="/friends" element={<Friends />} />
          <Route  path="/friendprofile" element={<FriendProfile />} />
          <Route  path="/forgetpassword/" element={<ForgetPassword />} />
          <Route  path="/verifycode" element={<VerifyCode />} />
          <Route  path="/newpassword" element={<Newpassword />} />
          <Route  path="/colorpicker" element={<Colorpicker />} />
          <Route  path="/materialtable" element={<MTable />} />
        </Routes>
      </Router>
      
    </div>
     </Suspense>
  );
}

export default App;
