import React from "react";
import LandingSVG from "./LandingSVG";

function LandingPage() {
  return (
    <>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
      <>
        <h3 className="text-bold text-3xl">
          A{" "}
          <span className="bg-blue-600 text-white pl-2 pr-2">
            Digital Cloud Based
          </span>{" "}
          platform to verify candidates{" "}
          <span className="bg-blue-600 text-white pl-2 pr-2">
            Certificates.
          </span>
        </h3>
        <p className="text-center mt-4 md:text-lg ">
          This app helps institutes to verify applicant certificates in fastest
          way. Students can ask for e-certificates with their details and upon
          approval of their institute they will recieve certificate serial
          number which can be used anywhere.
        </p>
        <p className="text-xl text-gray-600 pt-5">
          Say No to forged Certificates!
        </p>
      </>
      <div className="w-full flex justify-center mt-10 ">
        <button className=" border-blue-600 border-2 rounded-sm p-4 hover:bg-blue-600 hover:text-white w-64 m-2 focus:ring-2 ring-blue-600 ring-offset-2">
          Verify Certificate
        </button>
        <button className=" border-blue-600 border-2 rounded-sm p-4 hover:bg-blue-600 hover:text-white w-64 m-2 focus:ring-2 ring-blue-600 ring-offset-2">
          Get Started!
        </button>
      </div>
    </div>
    <LandingSVG />
    </>
  );
}

export default LandingPage;
