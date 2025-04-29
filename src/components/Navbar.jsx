"use client";
import React, { useState } from 'react';
import { Menu, MenuItem, ProductItem, HoveredLink } from '@/components/ui/navbar-menu';

const typeOptions = [
  { value: 'typeA', label: 'Type A' },
  { value: 'typeB', label: 'Type B' },
  { value: 'typeC', label: 'Type C' },
];

export default function Navbar() {
  const [active, setActive] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState(typeOptions[0].value);

  return (
    <div className="fixed top-0 inset-x-0 bg-[#113555] shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        {/* Left: Menu */}
        <div className="flex-1 min-w-0">
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
                <HoveredLink href="/hobby">Address</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        {/* Middle: Search Bar */}
        <form className="ml-4 flex items-center bg-white rounded-md px-2 py-1 shadow-sm" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none px-2 py-1 text-sm text-gray-700 w-40 md:w-64"
          />
          <button type="submit" className="text-gray-400 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
            </svg>
          </button>
        </form>
        {/* Right: Dropdown */}
        <select
          className="ml-4 bg-white text-gray-700 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
          value={selectedType}
          onChange={e => setSelectedType(e.target.value)}
        >
          {typeOptions.map(option => (
            <option key={option.value} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
} 