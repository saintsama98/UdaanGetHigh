"use client";
import React, { useState } from "react";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { LayoutGrid } from "../components/ui/layout-grid";
import ContactCards from "../components/ContactCards";
import Carousel from "../components/ui/carousel";
import { useRouter } from 'next/navigation';

const SkeletonOne = () => (
  <div>
    <p className="font-bold md:text-4xl text-xl text-white">House in the woods</p>
    <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div className="h-full w-full">
    <div className="h-full w-full bg-gray-100 rounded-lg p-4">
      <div className="h-full w-half bg-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center w-half">
          <h3 className="text-lg font-semibold text-gray-700">Interactive Map</h3>
          <p className="text-sm text-gray-500 mt-2">Map will be displayed here</p>
          <div className="mt-4 p-4 bg-white rounded-lg shadow-inner">
            <div className="grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="aspect-square bg-gray-100 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1476231682828-37e571bc172f?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: null,
  }
];

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);

  // Carousel slides data
  const carouselSlides = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Discover Dream Homes",
      button: "Explore Now"
    },
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      title: "Modern Living Spaces",
      button: "See Listings"
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      title: "Luxury Apartments",
      button: "View More"
    }
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar onContactClick={() => setShowContact(true)} className="top-0" />

      {/* Main Content */}
      <div className="flex-1 pt-16 p-4">
        <LayoutGrid cards={cards} />
        <div className="flex justify-center w-full">
          <div className="relative w-full max-w-full md:max-w-[500px] h-auto mx-auto">
            <Carousel slides={carouselSlides} />
          </div>
        </div>
      </div>
      {showContact && <ContactCards onClose={() => setShowContact(false)} />}
      <footer className="w-full bg-[#113555] text-white border-t border-[#0d2940] mt-auto pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 pb-6">
          {/* Quick Links */}
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
          {/* Reach Us At */}
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
          {/* Follow Us On */}
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
    </div>
  );
}

export const Logo = () => (
  <a href="#" className="flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <div className="h-5 w-6 bg-black rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm" />
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="font-medium text-black"
    >
      Propify
    </motion.span>
  </a>
);

export const LogoIcon = () => (
  <a href="#" className="flex items-center space-x-2 py-1 text-sm font-normal text-black">
    <div className="h-5 w-6 bg-black rounded-tl-lg rounded-tr-sm rounded-br-lg rounded-bl-sm" />
  </a>
);

function RegistryExplorer() {
  const [filter, setFilter] = useState('asset');
  const [search, setSearch] = useState('');
  const [assetType, setAssetType] = useState('urban');
  // Demo registry documents
  const demoDocs = [
    {
      id: 'REG-001',
      type: 'Asset Based',
      asset: 'Flat 101, Green Residency',
      owner: 'Amit Sharma',
      date: '2024-04-28',
      status: 'Active',
    },
    {
      id: 'REG-002',
      type: 'Follower Based',
      asset: 'Shop 12, City Mall',
      owner: 'Priya Verma',
      date: '2024-04-27',
      status: 'Pending',
    },
    {
      id: 'REG-003',
      type: 'AOR Based',
      asset: 'Plot 45, Sector 9',
      owner: 'Rohit Singh',
      date: '2024-04-26',
      status: 'Completed',
    },
  ];
  // Demo statistics
  const stats = [
    { label: 'Total Registries', value: 128, color: 'bg-blue-100 text-blue-800' },
    { label: 'Active Registries', value: 87, color: 'bg-green-100 text-green-800' },
    { label: 'Pending Registries', value: 23, color: 'bg-yellow-100 text-yellow-800' },
  ];
  // Demo recent activity
  const recent = [
    { icon: '📝', action: 'New Asset Registry Added', who: 'Amit Sharma', time: '2 min ago', id: 'REG-004' },
    { icon: '🔄', action: 'Registry Updated', who: 'Priya Verma', time: '10 min ago', id: 'REG-002' },
    { icon: '✅', action: 'Registry Approved', who: 'Rohit Singh', time: '1 hour ago', id: 'REG-003' },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f6fafd] via-[#eaf3fa] to-[#e0eaf6] pt-28 px-2 md:px-0">
      <div className="max-w-4xl mx-auto relative animate-fade-in">
        {/* Profile icon top right */}
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-blue-50 transition border border-[#e0eaf6]">
            <IconUserBolt className="h-7 w-7 text-[#113555]" color="#113555" stroke="#113555" />
          </button>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-2xl px-8 py-10 md:py-12 md:px-12 border border-[#e0eaf6]">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-[#113555] tracking-tight text-center drop-shadow-sm">Registry Document Explorer</h1>
          {/* Statistics Card */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex-1 rounded-xl shadow p-6 flex flex-col items-center ${stat.color} font-semibold text-lg min-w-[160px]`}>
                <span className="text-2xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex bg-[#eaf3fa] rounded-full shadow-inner p-1 w-fit">
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'rural' ? 'bg-[#113555] text-white shadow' : 'text-[#113555] hover:bg-blue-100'}`}
                onClick={() => setAssetType('rural')}
                type="button"
              >
                <span role="img" aria-label="Rural">🌾</span> Rural
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'urban' ? 'bg-[#113555] text-white shadow' : 'text-[#113555] hover:bg-blue-100'}`}
                onClick={() => setAssetType('urban')}
                type="button"
              >
                <span role="img" aria-label="Urban">🏙️</span> Urban
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-3 mb-8 items-center justify-center">
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className="bg-[#f6fafd] border border-[#c3d3e6] rounded-l-lg px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#113555] text-base shadow-sm"
            >
              <option value="asset">Asset Based</option>
              <option value="follower">Follower Based</option>
              <option value="aor">AOR Based</option>
            </select>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by Registry ID, Owner, Asset..."
              className="flex-1 bg-[#f6fafd] border border-[#c3d3e6] rounded-r-lg px-5 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#113555] text-base shadow-sm min-w-[200px]"
            />
            <button className="bg-[#113555] text-white px-6 py-3 rounded-lg ml-0 md:ml-2 hover:bg-[#0d2940] transition font-semibold shadow-sm">Search</button>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e0eaf6]">
            <h2 className="text-xl font-bold mb-6 text-[#113555] text-center">Latest Registry Documents</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-base rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#eaf3fa] text-[#113555]">
                    <th className="py-3 px-4 text-left font-semibold">Registry ID</th>
                    <th className="py-3 px-4 text-left font-semibold">Type</th>
                    <th className="py-3 px-4 text-left font-semibold">Asset</th>
                    <th className="py-3 px-4 text-left font-semibold">Owner</th>
                    <th className="py-3 px-4 text-left font-semibold">Date</th>
                    <th className="py-3 px-4 text-left font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {demoDocs.filter(doc =>
                    (filter === 'asset' && doc.type === 'Asset Based') ||
                    (filter === 'follower' && doc.type === 'Follower Based') ||
                    (filter === 'aor' && doc.type === 'AOR Based')
                  ).filter(doc =>
                    doc.id.toLowerCase().includes(search.toLowerCase()) ||
                    doc.asset.toLowerCase().includes(search.toLowerCase()) ||
                    doc.owner.toLowerCase().includes(search.toLowerCase())
                  ).map((doc, idx) => (
                    <tr key={doc.id} className={
                      `border-b last:border-b-0 ${idx % 2 === 0 ? 'bg-[#f6fafd]' : 'bg-white'} hover:bg-[#eaf3fa] transition`}
                    >
                      <td className="py-3 px-4 font-mono font-medium">{doc.id}</td>
                      <td className="py-3 px-4">{doc.type}</td>
                      <td className="py-3 px-4">{doc.asset}</td>
                      <td className="py-3 px-4">{doc.owner}</td>
                      <td className="py-3 px-4">{doc.date}</td>
                      <td className="py-3 px-4">
                        <span className={
                          doc.status === 'Active' ? 'text-green-600 font-semibold' :
                          doc.status === 'Pending' ? 'text-yellow-600 font-semibold' :
                          'text-blue-600 font-semibold'
                        }>{doc.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Recently Added / Recent Activity Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[#e0eaf6] mt-8">
            <h2 className="text-xl font-bold mb-6 text-[#113555] text-center">Recent Activity</h2>
            <ul className="space-y-4">
              {recent.map((item, idx) => (
                <li key={idx} className={
                  `flex items-center gap-4 p-4 rounded-lg bg-[#f6fafd] border-l-4 ` +
                  (item.icon === '📝' ? 'border-blue-400' : item.icon === '🔄' ? 'border-yellow-400' : 'border-green-400')
                }>
                  <span className={
                    `flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold shadow ` +
                    (item.icon === '📝' ? 'bg-blue-100 text-blue-600' : item.icon === '🔄' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600')
                  }>{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#113555] truncate">{item.action} <span className="text-xs text-gray-400 font-normal">({item.id})</span></div>
                    <div className="text-sm text-gray-500 truncate">By <span className="font-medium text-[#113555]">{item.who}</span> • <span className="italic">{item.time}</span></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in {
          animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </div>
  );
}

function Navbar({ className, onContactClick }) {
  const [active, setActive] = useState(null);
  const [searchActive, setSearchActive] = useState(false);
  const router = useRouter();

  return (
    <div className={cn("fixed top-0 inset-x-0 bg-[#113555] shadow-md z-50 flex items-center justify-between", className)}>
      <div className="flex items-center h-full pl-8 pr-4">
        <span className="text-white text-xl font-bold">Welcome to Propify</span>
      </div>
      <div className="flex-1 flex justify-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Entity Registration">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Entity Registration Report</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item={
            <button
              onClick={() => router.push('/registry-explorer')}
              className="bg-transparent border-none p-0 m-0 text-inherit font-semibold hover:underline"
              style={{ color: "white" }}
            >
              Public Search
            </button>
          } />
        </Menu>
      </div>
      {/* Animated Search Bar */}
      <form
        className={
          `relative flex items-center transition-all duration-300 mr-4 ` +
          (searchActive ? 'w-64 shadow-lg' : 'w-32')
        }
        onFocus={() => setSearchActive(true)}
        onBlur={() => setSearchActive(false)}
        tabIndex={-1}
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search..."
          className="bg-white/20 text-white placeholder-white/70 rounded-full px-4 py-1 outline-none transition-all duration-300 w-full focus:bg-white/30"
        />
        <button type="submit" className="absolute right-2 text-white/70 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
          </svg>
        </button>
      </form>
      <div className="flex items-center h-full pr-8">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-white bg-opacity-10 hover:bg-opacity-20 transition">
          <IconUserBolt className="h-6 w-6 text-white" color="white" stroke="white" />
        </button>
      </div>
    </div>
  );
}

export { RegistryExplorer };
