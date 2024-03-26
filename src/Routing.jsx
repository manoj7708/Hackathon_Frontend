import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/HomeScreen/Home'
import Register from './pages/RegisterScreen/Register'
import Testimonials from './pages/HomeScreen/Testimonials'
import Dashboard from './pages/DashBoardScreen/Dashboard'


const RouterComponent = () => {
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<Testimonials />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/government" element={<GovernmentPage />} /> */}
          {/* <Route path="/studentSurvey" element={<StudentSurveyPage />} /> */}
        </Routes>
    </Router>
  );
};

export default RouterComponent;
