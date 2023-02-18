import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./component/LandingPage";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import LandingSVG from "./component/LandingSVG";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./component/Login";
import Student from "./component/Student";
import PrevReqCert from "./component/PrevReqCert";
// import { userAuthContract } from "./web3";
// import { loginUser, registerUser } from "./web3";
import ABI from "./utils/ABI.json";
import { useEffect } from "react";
import { ethers } from 'ethers';
// import { blockchainCreateAcc } from "./web3";
import { addCertificate } from "./web3";

function App() {
//   useEffect(() => {
//   console.log(loginUser('shudh@tcet.in', 'pass234'));
//   blockchainCreateAcc();
//   addCertificate("Vivek Mishra", "105", "Information Techology Engineering", 1676672012, "BE", "0x361A408956b36bE951B2e05E5Cf47C857ED43aF7")
// }, []);



// if (window.ethereum) {
//     // console.log(web3.registerUser('vivek@zoya.in', 'pass'));
//     userAuthContract.methods.registerStudent('Vivek Pandit','vivek@zoya.in', 'pass').send({from: '0xCAa7CcC0891B646fCf00412db6DB3F83EE0cCdB4'})
//         .then((result) => {
//             console.log('User registered successfully');
//         })
//         .catch((error) => {
//             console.error('Error registering user:', error);
//         });
//     console.log("MetaMask is installed!");
//   } else {
//     console.log("MetaMask is not installed!");
//   }

// const connection = async (e) => {
//   if (window.ethereum) {
//     const provider = new ethers.providers.Web3Provider(window.ethereum);
//     const certifier = new ethers.Contract("0x61cA05a12fd6593836f7De4dbD9770828b92e2e7", ABI, provider)
  
//     const getPasswordHash = await certifier.getPasswordHash();
//     console.log(getPasswordHash)
//   }
// }

// connection()




  return (
    <Router>
      <div className="App w-full">
        <Navbar />
        <Routes>
          <Route path="/" >
            <Route index element={<LandingPage />} /> 
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="/student" element={<Student />} />
          <Route path="/student/prevLog" element={<PrevReqCert />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
