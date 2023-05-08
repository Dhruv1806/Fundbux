
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import { Home } from './Components/First';
import { About } from './Components/About';
import { Causes } from './Components/Causes';
import { News } from './Components/News';
import { Contact } from './Components/Contact';
import { Signup } from './Wrokouts/Signup';
// import { Login } from './Components/Login';
import { WorkRead } from './Wrokouts/WorkRead';
import { Appoin } from './Wrokouts/Appoin';
import { Login } from './Wrokouts/Login';
import { Shop } from './Components/Shop';
import { Try1 } from './Components/Try1';
import { useState } from 'react';
import { Try2 } from './Components/Try2';

// import Appointment from './Wrokouts/Appointment';

function App() {
  const [user,setUser]=useState(true)
  return (
    <>
      <Router>
      <Routes>
          <Route path='/' element={user ? <Home setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/About' element={user ? <About setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/Causes' element={user ? <Causes setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/Shop' element={user ? <Shop setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/News' element={user ? <News setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/Contact' element={user ? <Contact setUser={setUser} />:<Login setMsg={setUser}/>}/>
          <Route path='/login' element={<Login setUser={setUser}/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
   </Router>
      {/* <Try1/> */}
      </>
  );
}
export default App;


