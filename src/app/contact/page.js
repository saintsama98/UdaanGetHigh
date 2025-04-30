import React from "react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#232329]">Contact Us</h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Card 1 */}
          <div className="flex-1 bg-white rounded-lg shadow p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-4">Security Interest Registry</h2>
            <p className="mb-2 font-semibold">By Post / Courier:</p>
            <p className="mb-2 text-sm">
              C/o Chief Operating Officer<br />
              Central Registry of Securitisation Asset Reconstruction and Security Interest of India,<br />
              Tower 1, Office Block, 4th Floor, Plate-A, Adjacent to Ring Road,<br />
              NBCC, Kidwai Nagar(East), New Delhi - 110023
            </p>
            <p className="mb-2 font-semibold">By Telephone:</p>
            <ul className="mb-2 text-sm list-disc pl-5">
              <li><b>011-24664628</b></li>
              <li><b>8595542303</b></li>
              <li><b>011-24664629</b></li>
            </ul>
            <p className="mb-2 font-semibold">By Email:</p>
            <p className="mb-2 text-sm">
              You can also email us at our helpdesk email id: <b>helpdesk[at]cersai[dot]org[dot]in</b>
            </p>
            <div className="text-xs text-blue-900 bg-blue-50 p-2 rounded">
              <b>ℹ️ No cases related to CKYCR Registry shall be entertained on helpdesk[at]cersai[dot]org[dot]in.</b>
              <br />
              CKYCRR related cases may be referred to <a href="mailto:helpdesk@ckycindia.in" className="text-blue-600 underline">helpdesk[at]ckycindia[dot]in</a>
            </div>
          </div>
          {/* Card 2 */}
          <div className="flex-1 bg-white rounded-lg shadow p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-4">CKYCR Registry</h2>
            <p className="mb-2 font-semibold">By Telephone:</p>
            <ul className="mb-2 text-sm list-disc pl-5">
              <li><b>022 61102592</b></li>
              <li><b>022 26592595</b></li>
            </ul>
            <p className="mb-2 font-semibold">By Email:</p>
            <p className="mb-2 text-sm">
              You can also email at the CKYCR helpdesk email id: <b>helpdesk[at]ckycindia[dot]in</b>
            </p>
            <div className="text-xs text-blue-900 bg-blue-50 p-2 rounded">
              <b>ℹ️ No cases related to Security Interest (SI) Registry shall be entertained on helpdesk[at]ckycindia[dot]in.</b>
              <br />
              SI Registry related cases may be referred to <a href="mailto:helpdesk@cersai.org" className="text-blue-600 underline">helpdesk[at]cersai[dot]org[dot]in</a>
            </div>
            <p className="mt-2 text-xs">
              For more information please visit the CKYCR website at: <a href="https://www.ckycindia.in" className="text-blue-600 underline">www.ckycindia.in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 