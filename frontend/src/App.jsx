
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './page/LandingPage';
import Signup from "./Components/Signup"
import Login from "./Components/Login"
import Dashboard from "./page/Dashboard"
import CalculateFootprint from './Components/CalculateFootprint';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path = "/auth"  element={<Signup/>} />
        <Route path = "/login"  element={<Login/>} />
        <Route path = "/Dashboard"  element={<Dashboard/>} />
        <Route path = "/calculate-footprint"  element={<CalculateFootprint/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;



