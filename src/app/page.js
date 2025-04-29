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
import LampDemo from "../components/ui/lamp";
import { Meteors } from "../components/ui/meteors";
import { Button } from "../components/ui/moving-border";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

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

function MapCard() {
  return (
    <div className="w-full mb-12 rounded-xl shadow-lg bg-[#18181b] border border-[#232329] overflow-hidden">
      <div className="w-full h-[400px]">
        <MapContainer
          center={[19.7515, 75.7139]}
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', background: '#232329', borderRadius: '0.75rem 0.75rem 0 0' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
          />
        </MapContainer>
      </div>
      <div className="p-4 text-center">
        <span className="text-lg font-semibold text-gray-100">Explore Secure Land & Property Boundaries with Propify</span>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      title: 'Registry Filing',
      description: 'Seamless and secure digital property registry filing with government integration.'
    },
    {
      title: 'Property Verification',
      description: 'Instant verification of property documents and ownership history.'
    },
    {
      title: 'Legal Consultation',
      description: 'Expert legal advice for property transactions and dispute resolution.'
    },
    {
      title: 'Digital Document Storage',
      description: 'Safe, encrypted storage for all your property documents and records.'
    }
  ];
  return (
    <div className="w-full mb-12">
      <h2 className="text-2xl font-bold text-gray-100 mb-6 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <div key={idx} className="rounded-xl shadow-lg bg-[#232329] border border-[#28282c] p-6 flex flex-col items-center text-center h-full">
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  const [showContact, setShowContact] = useState(false);
  const [showNotice, setShowNotice] = useState(true);

  // Infinite moving cards demo data
  const movingCards = [
    { quote: "Propify made property registration seamless and secure!", name: "Amit Sharma", title: "Verified Owner" },
    { quote: "Transparent records, zero hassle.", name: "Priya Verma", title: "Real Estate Agent" },
    { quote: "I trust Propify for all my property needs.", name: "Rohit Singh", title: "Investor" },
    { quote: "Fraud prevention is top-notch.", name: "Sunita Rao", title: "Lawyer" },
    { quote: "Modern, easy, and reliable.", name: "Vikas Patel", title: "Designer" },
  ];

  // Carousel slides data
  const carouselSlides = [
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      title: "Secure Your Property with Propify",
      button: "Start Registration"
    },
    {
      src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80",
      title: "Transparent Records, Trusted Ownership",
      button: "View Records"
    },
    {
      src: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80",
      title: "Modern Property Management",
      button: "Learn More"
    }
  ];

  return (
    <div className="h-screen flex flex-col overflow-x-hidden bg-[#18181b] text-gray-200">
      {/* Meteor Notice Modal */}
      {showNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative bg-[#232329] rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center border border-[#232329]">
            <Meteors number={18} />
            <h2 className="text-2xl font-bold text-gray-100 mb-4">Propify Public Notice</h2>
            <p className="text-gray-300 mb-6 text-center">Protect yourself from property fraud. Always verify documents and use Propify for secure, transparent transactions.</p>
            <button onClick={() => setShowNotice(false)} className="w-40 bg-[#232329] text-gray-100 rounded-lg py-2 px-4 transition hover:shadow-lg hover:bg-[#28282c]">Understood</button>
          </div>
        </div>
      )}
      {/* Navbar */}
      <Navbar onContactClick={() => setShowContact(true)} className="top-0 bg-[#232329] text-gray-100" />
      {/* Main Content (no sidebar) */}
      <div className="flex flex-1 pt-16">
        {/* Right Content Section (centered) */}
        <div className="flex-1 p-4 flex flex-col items-center">
          {/* Lamp as centerpiece */}
          <div className="w-full mb-12">
            <LampDemo />
          </div>
          {/* Map Card for Maharashtra */}
          <MapCard />
          {/* Our Services Section */}
          <ServicesSection />
          {/* Carousel section */}
          <div className="w-full max-w-2xl mb-12">
            <Carousel slides={carouselSlides} />
          </div>
          {/* Infinite Moving Cards section */}
          <div className="w-full mb-12">
            <InfiniteMovingCards items={movingCards} direction="left" speed="fast" />
          </div>
          {/* Example of a minimal dark button */}
          <button className="w-48 mt-4 bg-[#232329] text-gray-100 rounded-lg py-3 px-6 transition hover:shadow-lg hover:bg-[#28282c]">Get Started with Propify</button>
        </div>
      </div>
      {showContact && <ContactCards onClose={() => setShowContact(false)} />}
      <footer className="w-full bg-[#232329] text-gray-200 border-t border-[#232329] mt-auto pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-8 pb-6">
          {/* Quick Links */}
          <div className="flex-1 min-w-0 break-words mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Propify Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <a href="#" className="hover:underline">About Propify</a>
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
          <div className="flex-1 min-w-0 break-words md:border-l md:border-r border-[#232329] px-6 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Propify</h3>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="min-w-0 break-words">
                <h4 className="font-bold underline mb-1">SI Registry</h4>
                <div className="flex items-center gap-2"><span>📞</span> <span>011-24664628, 8595542303</span></div>
                <a href="#" className="block ml-6 text-xs text-gray-300 hover:underline">Raise Incident</a>
                <a href="#" className="block ml-6 text-xs text-gray-300 hover:underline">Get Ticket Details</a>
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
            <h3 className="text-xl font-semibold mb-4">Follow Propify</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">T</span> Twitter</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">F</span> Facebook</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">L</span> LinkedIn</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">I</span> Instagram</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">Y</span> YouTube</a>
              <a href="#" className="flex items-center gap-2 hover:underline"><span className="bg-[#232329] text-gray-200 rounded-full w-6 h-6 flex items-center justify-center">P</span> Public</a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#232329] py-3 px-6 flex flex-col md:flex-row items-center justify-between text-xs bg-[#232329]">
          <span>© 2024 Propify. All rights reserved.</span>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="mt-2 md:mt-0 w-40 bg-[#232329] text-gray-100 rounded-lg py-2 px-4 transition hover:shadow-lg hover:bg-[#28282c]">Back to Top</button>
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
    { label: 'Total Registries', value: 128, color: 'bg-[#232329] text-gray-200' },
    { label: 'Active Registries', value: 87, color: 'bg-[#232329] text-gray-200' },
    { label: 'Pending Registries', value: 23, color: 'bg-[#232329] text-gray-200' },
  ];
  // Demo recent activity
  const recent = [
    { icon: '📝', action: 'New Registry Added', who: 'Amit Sharma', time: '2 min ago', id: 'REG-004' },
    { icon: '🔄', action: 'Registry Updated', who: 'Priya Verma', time: '10 min ago', id: 'REG-002' },
    { icon: '✅', action: 'Registry Approved', who: 'Rohit Singh', time: '1 hour ago', id: 'REG-003' },
  ];
  return (
    <div className="min-h-screen bg-[#18181b] pt-28 px-2 md:px-0 text-gray-200">
      <div className="max-w-4xl mx-auto relative animate-fade-in">
        {/* Profile icon top right */}
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#232329] shadow-lg hover:bg-[#28282c] transition border border-[#232329]">
            <IconUserBolt className="h-7 w-7 text-gray-200" />
          </button>
        </div>
        <div className="bg-[#232329]/90 rounded-2xl shadow-2xl px-8 py-10 md:py-12 md:px-12 border border-[#232329]">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-100 tracking-tight text-center drop-shadow-sm">Propify Registry Document Explorer</h1>
          {/* Statistics Card */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex-1 rounded-xl shadow p-6 flex flex-col items-center ${stat.color} font-semibold text-lg min-w-[160px] border border-[#232329]`}>
                <span className="text-2xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center mb-6">
            <div className="flex bg-[#232329] rounded-full shadow-inner p-1 w-fit border border-[#232329]">
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'rural' ? 'bg-[#18181b] text-gray-100 shadow' : 'text-gray-200 hover:bg-[#28282c]'}`}
                onClick={() => setAssetType('rural')}
                type="button"
              >
                <span role="img" aria-label="Rural">🌾</span> Rural
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'urban' ? 'bg-[#18181b] text-gray-100 shadow' : 'text-gray-200 hover:bg-[#28282c]'}`}
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
              className="bg-[#232329] border border-[#232329] rounded-l-lg px-5 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#28282c] text-base shadow-sm"
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
              className="flex-1 bg-[#232329] border border-[#232329] rounded-r-lg px-5 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#28282c] text-base shadow-sm min-w-[200px] placeholder-gray-400"
            />
            <button className="bg-[#232329] text-gray-100 px-6 py-3 rounded-lg ml-0 md:ml-2 hover:bg-[#28282c] transition font-semibold shadow-sm border border-[#232329]">Search</button>
          </div>
          <div className="bg-[#18181b] rounded-xl shadow-lg p-6 border border-[#232329]">
            <h2 className="text-xl font-bold mb-6 text-gray-100 text-center">Latest Registry Documents</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-base rounded-xl overflow-hidden">
                <thead>
                  <tr className="bg-[#232329] text-gray-100">
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
                      `border-b last:border-b-0 ${idx % 2 === 0 ? 'bg-[#232329]' : 'bg-[#18181b]'} hover:bg-[#28282c] transition`}
                    >
                      <td className="py-3 px-4 font-mono font-medium">{doc.id}</td>
                      <td className="py-3 px-4">{doc.type}</td>
                      <td className="py-3 px-4">{doc.asset}</td>
                      <td className="py-3 px-4">{doc.owner}</td>
                      <td className="py-3 px-4">{doc.date}</td>
                      <td className="py-3 px-4">
                        <span className={
                          doc.status === 'Active' ? 'text-gray-100 font-semibold' :
                          doc.status === 'Pending' ? 'text-gray-400 font-semibold' :
                          'text-gray-300 font-semibold'
                        }>{doc.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* Recent Activity Section */}
          <div className="bg-[#18181b] rounded-xl shadow-lg p-6 border border-[#232329] mt-8">
            <h2 className="text-xl font-bold mb-6 text-gray-100 text-center">Recent Activity</h2>
            <ul className="space-y-4">
              {recent.map((item, idx) => (
                <li key={idx} className={
                  `flex items-center gap-4 p-4 rounded-lg bg-[#232329] border-l-4 border-[#28282c]`
                }>
                  <span className="flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold shadow bg-[#18181b] text-gray-200">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-100 truncate">{item.action} <span className="text-xs text-gray-400 font-normal">({item.id})</span></div>
                    <div className="text-sm text-gray-400 truncate">By <span className="font-medium text-gray-100">{item.who}</span> • <span className="italic">{item.time}</span></div>
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
    <div className={cn("fixed top-0 inset-x-0 bg-[#232329] shadow-md z-50 flex items-center justify-between text-gray-100", className)}>
      <div className="flex items-center h-full pl-8 pr-4">
        <span className="text-gray-100 text-xl font-bold">Propify: Secure Property Registry</span>
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
              style={{ color: "#fafafa" }}
            >
              Registry Explorer
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
          placeholder="Search"
          className="bg-[#18181b] text-gray-100 placeholder-gray-400 rounded-full px-4 py-1 outline-none transition-all duration-300 w-full focus:bg-[#232329] border border-[#232329]"
        />
        <button type="submit" className="absolute right-2 text-gray-400 hover:text-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4-4m0 0A7 7 0 104 4a7 7 0 0013 13z" />
          </svg>
        </button>
      </form>
      <div className="flex items-center h-full pr-8">
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#18181b] bg-opacity-60 hover:bg-[#232329] transition">
          <IconUserBolt className="h-6 w-6 text-gray-200" />
        </button>
      </div>
    </div>
  );
}

export { RegistryExplorer };
