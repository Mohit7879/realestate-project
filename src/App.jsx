
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignOut from './pages/SignOut';


export default function App() {
  return (
    <>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signout" element={<SignOut/>} />
     
    </Routes>
  </BrowserRouter>
  </>
  
  )
}