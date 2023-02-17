import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingSVG from "./component/LandingSVG";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login";

function App() {
  return (
    <Router>
      <div className="App w-full">
        <Navbar />
        <Routes>
          <Route path="/" >
            <Route index element={<LandingPage />} /> 
          </Route>
          <Route path="/login" element={<Login />}/>
          
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
