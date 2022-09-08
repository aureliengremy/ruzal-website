import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Realization from './pages/Realization/Realization';
// import Support from './pages/Support/Support';
import About from './pages/About/About';
import ErrorPage from './pages/Error/ErrorPage';


import './App.css';

function App() {
  return (

    <Routes>
      <Route path="/" element={<Navigate to="/home"/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/realization" element={<Realization/>} />
      {/* <Route path="/support" element={<Support/>} /> */}
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<ErrorPage/>} />
    </Routes>
  );
}

export default App;
