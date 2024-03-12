import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Profile from './components/Profile';

import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
     <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Signup' element={<SignUp/>}></Route>
      <Route path='/Signin' element={<SignIn/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>

      
     </Routes>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
