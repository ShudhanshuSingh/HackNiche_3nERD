import React, { useState } from "react";
import ResponseModal from "./ResponseModal";

function Student() {
  const [open,setOpen] = useState(false);

  const modalHandler = (e) =>{
    e.preventDefault();
    setOpen(!open);
  }
  return (
    <div className="w-full px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
        {
            open? (
                <ResponseModal />
            ) : (
                <></>
            )
        }
      <h3 className="text-bold text-xl">
        Your Unique Address is :<br />{" "}
        <span className="text-2xl bg-slate-300 pl-2 pr-2">
          0x74a949bE0D15ee59675Ec4c92858751a074C5c0D
        </span>{" "}
      </h3>
      <form className='mt-10 w-auto flex flex-col'>
        <>
        <label for="colleges">Choose a college to make request:</label>
        <select name="colleges" id="colleges" className="p-4 mt-2 outline outline-offset-1 outline-blue-500">
          <option value="tcet">Thakur College of Engineering and Technology</option>
          <option value="djsce">D.J. Sanghvi College of Engineering</option>
          <option value="tcsc">Thakur College of Science and Commerce</option>
          <option value="mithibai">Mithibai College</option>
        </select>
        </>
         
        <div className="w-full flex justify-around mt-10 ">
        <button className=" border-blue-600 border-2 rounded-sm p-4 hover:bg-blue-600 hover:text-white focus:ring-2 ring-blue-600 ring-offset-2">
          Show Previous Requests
        </button>
        <button onClick={(e)=>modalHandler(e)} className="border-blue-600 border-2 rounded-sm p-4 hover:bg-blue-600 hover:text-white align-right focus:ring-2 ring-blue-600 ring-offset-2">
          Make E-Certificate Request
        </button> 
      </div>
      </form>
      
    </div>
  );
}

export default Student;
