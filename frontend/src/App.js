import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin.js';
import SignUp from './pages/Signup.js';
import Home from './pages/Home.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
function App() {
  return(
    <>
  <BrowserRouter>
    <Routes>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/footer' element={<Footer/>}/>


    </Routes>
  </BrowserRouter>
    </>
  
  );
}

export default App;
