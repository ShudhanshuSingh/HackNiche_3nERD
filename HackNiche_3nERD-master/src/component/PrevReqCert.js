import React, { useEffect, useState } from "react";
import data from "../utils/tableData.json";
import QrModal from "./QrModal";
function PrevReqCert() {
    const [qrOpen,setQrOpen] = useState(false);
    const [certId,setCertId] = useState(null);
    let dd;
    const qrHandler = (e) =>{
        setCertId(e);
        setQrOpen(!qrOpen);
    }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-40">
        {
            qrOpen ? (
                <QrModal certId={certId} />
            ):(
                <></>
            )
        }
      <table class="table-auto w-full text-left border-separate border-spacing-2 border border-slate-400">
        <thead>
          <tr className="border-b-2">
            <th>Request ID</th>
            <th>College Name</th>
            <th>Approval Status</th>
            <th>Certificate ID</th>
            <th>QR Code</th>
          </tr>
        </thead>
        <tbody>
            {
                data.map((d)=>(
                    <tr className="m-4">
                        <td>{d.id}</td>
                        <td>{d.colName}</td>
                        <td className={`${d.status === "failed"? "bg-red-400 ":"bg-green-400"}`} >{d.status}</td>
                        <td>{d.certId}</td>
                        <td><button onClick={()=>qrHandler(d.certId)}>View</button></td>
                    </tr>
                ))
            }
          
        </tbody>
      </table>
    </div>
  );
}

export default PrevReqCert;
