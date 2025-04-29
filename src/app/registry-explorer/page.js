"use client";
import { RegistryExplorer } from '../page';
import React from 'react';

export default function RegistryExplorerPage() {
  return (
    <>
      <RegistryExplorer />
      <footer className="w-full bg-[#113555] text-white border-t border-[#0d2940] mt-auto pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 pb-6">
          <div className="flex-1 min-w-0 break-words mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">RTI</a>
              <a href="#" className="hover:underline">Downloads</a>
              <a href="#" className="hover:underline">Circulars</a>
              <a href="#" className="hover:underline">Annual Reports</a>
              <a href="#" className="hover:underline">Working Hours</a>
              <a href="#" className="hover:underline">Website Policies</a>
              <a href="#" className="hover:underline">Web Information Manager</a>
              <a href="#" className="hover:underline">Help</a>
              <a href="#" className="hover:underline">Tenders</a>
              <a href="#" className="hover:underline">Feedback</a>
              <a href="#" className="hover:underline">Terms and Conditions</a>
            </div>
          </div>
          <div className="flex-1 min-w-0 break-words md:border-l md:border-r border-[#0d2940] px-6 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Reach Us At</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="min-w-0 break-words">
                <h4 className="font-bold underline mb-1">SI Registry</h4>
                <div className="flex items-center gap-2"><span>📞</span> <span>011-24664628, 8595542303</span></div>
                <a href="#" className="block ml-6 text-xs text-blue-200 hover:underline">Raise Incident</a>
                <a href="#" className="block ml-6 text-xs text-blue-200 hover:underline">Get Ticket Details</a>
              </div>
              <div className="min-w-0 break-words">
                <h4 className="font-bold underline mb-1">CKYC Registry</h4>
                <div className="flex items-center gap-2"><span>📞</span> <span>022-61102592</span></div>
                <div className="flex items-center gap-2 ml-6"><span> </span> <span>022-26592595</span></div>
              </div>
            </div>
          </div>
          <div className="flex-1 min-w-0 break-words">
            <h3 className="text-xl font-semibold mb-4">Follow Us On</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">T</span> Twitter</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">F</span> Facebook</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">L</span> LinkedIn</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">I</span> Instagram</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">Y</span> YouTube</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-white text-[#113555] rounded-full w-6 h-6 flex items-center justify-center">P</span> Public</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#0d2940] py-3 px-6 flex flex-col md:flex-row items-center justify-between text-xs bg-[#113555]">
          <span>© 2024 Propify. All rights reserved.</span>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-2 md:mt-0 bg-white text-[#113555] px-4 py-1 rounded-full flex items-center gap-2 shadow hover:bg-blue-100 transition">
            Back to Top <span className="text-lg">↑</span>
          </button>
        </div>
      </footer>
    </>
  );
} 