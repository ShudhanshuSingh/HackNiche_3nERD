import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-around   align-middle p-2">
      <div className="flex-none flex justify-center align-middle">
        {location.pathname !== "/" ? (
          <h2 onClick={()=>navigate(-1)} className="text-3xl font-bold p-4 hover:cursor-pointer text-blue-800 ">
            ←
          </h2>
        ) : (
          <h2 className="text-3xl font-bold p-4 hover:cursor-pointer text-blue-800 ">
            TrueCertifyer
          </h2>
        )}

        <div className="flex-auto flex-row">
          {/* <ul className="flex flex-1 justify-evenly">
            <li>About</li>
            <li>Team</li>
            <li>Thinking..</li>
          </ul> */}
        </div>
      </div>

      <div>
        {location.pathname === "/" ? (
          <button onClick={()=>navigate('/login')} className="flex-1 border-blue-600 border-2 rounded-md p-2 pl-4 pr-4 mt-2  hover:bg-blue-600 hover:text-white">
            Login / Register
          </button>
        ) : (
          <h2 className="text-3xl font-bold p-4 hover:cursor-pointer text-blue-800 ">
            TrueCertifyer
          </h2>
        )}
      </div>
    </div>
  );
}

export default Navbar;
