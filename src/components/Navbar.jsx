"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Menu, MenuItem, HoveredLink } from '@/components/ui/navbar-menu';

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Handle click outside of profile dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 bg-[#232329] shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        {/* Left: Home Button and Menu */}
        <div className="flex items-center flex-1 min-w-0 gap-4">
          <a href="/" className="text-gray-100 text-lg font-bold px-3 py-2 rounded hover:bg-[#18181b] transition-colors">Home</a>
          <Menu setActive={setActive}>
            <MenuItem setActive={setActive} active={active} item="Entity Registration">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Entity Registration Report</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Public Search">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Asset Based Search</HoveredLink>
                <HoveredLink href="/interface-design">Follower Based Search</HoveredLink>
                <HoveredLink href="/seo">AOR Based Search</HoveredLink>
                <HoveredLink href="/branding">Search Report</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/contact">Address</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        {/* Middle: Search Bar */}
        <form className="ml-4 flex items-center bg-[#18181b] rounded-md px-2 py-1 shadow-sm" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none px-2 py-1 text-sm text-gray-100 w-40 md:w-64 placeholder-gray-400"
          />
          <button type="submit" className="text-gray-400 hover:text-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
            </svg>
          </button>
        </form>
        {/* Right: Profile Dropdown */}
        <div className="flex items-center space-x-4">
          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-[#18181b] hover:bg-[#28282c] transition-colors duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#18181b] ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="profile-menu">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:bg-[#28282c]" role="menuitem">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:bg-[#28282c]" role="menuitem">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-100 hover:bg-[#28282c]" role="menuitem">Help Center</a>
                  <div className="border-t border-[#28282c]"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-red-400 hover:bg-[#28282c]" role="menuitem">Sign out</a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 