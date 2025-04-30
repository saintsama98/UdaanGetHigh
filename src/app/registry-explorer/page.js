"use client";
import { useState, useEffect } from 'react';
import { IconUserBolt } from "@tabler/icons-react";
import axios from 'axios';

// Sample static data
const sampleData = {
  follower: [
    { id: "FOL-001", type: "Follower Based", asset: "Commercial Complex A1", owner: "Sanjay Mehta", date: "2024-03-01", status: "Active", pdfUrl: "/documents/FOL-001.pdf" },
    { id: "FOL-002", type: "Follower Based", asset: "Retail Space B2", owner: "Meera Patel", date: "2024-03-02", status: "Active", pdfUrl: "/documents/FOL-002.pdf" },
    { id: "FOL-003", type: "Follower Based", asset: "Office Tower Z9", owner: "Vikram Shah", date: "2024-03-03", status: "Pending", pdfUrl: "/documents/FOL-003.pdf" },
    { id: "FOL-004", type: "Follower Based", asset: "Shopping Mall XY", owner: "Priya Sharma", date: "2024-03-04", status: "Active", pdfUrl: "/documents/FOL-004.pdf" },
    { id: "FOL-005", type: "Follower Based", asset: "Business Park C3", owner: "Rahul Kumar", date: "2024-03-05", status: "Completed", pdfUrl: "/documents/FOL-005.pdf" },
    { id: "FOL-006", type: "Follower Based", asset: "Tech Hub D4", owner: "Neha Singh", date: "2024-03-06", status: "Active", pdfUrl: "/documents/FOL-006.pdf" },
    { id: "FOL-007", type: "Follower Based", asset: "Industrial Zone E5", owner: "Arun Verma", date: "2024-03-07", status: "Pending", pdfUrl: "/documents/FOL-007.pdf" },
    { id: "FOL-008", type: "Follower Based", asset: "Logistics Park F6", owner: "Kavita Reddy", date: "2024-03-08", status: "Active", pdfUrl: "/documents/FOL-008.pdf" },
    { id: "FOL-009", type: "Follower Based", asset: "Corporate Tower G7", owner: "Rajesh Gupta", date: "2024-03-09", status: "Completed", pdfUrl: "/documents/FOL-009.pdf" },
    { id: "FOL-010", type: "Follower Based", asset: "Innovation Center H8", owner: "Anita Desai", date: "2024-03-10", status: "Active", pdfUrl: "/documents/FOL-010.pdf" }
  ],
  aor: [
    { id: "AOR-001", type: "AOR Based", asset: "Residential Complex R1", owner: "Amit Kumar", date: "2024-03-01", status: "Active", pdfUrl: "/documents/AOR-001.pdf" },
    { id: "AOR-002", type: "AOR Based", asset: "Apartment Block A2", owner: "Sneha Patel", date: "2024-03-02", status: "Pending", pdfUrl: "/documents/AOR-002.pdf" },
    { id: "AOR-003", type: "AOR Based", asset: "Villa Project V3", owner: "Raj Malhotra", date: "2024-03-03", status: "Active", pdfUrl: "/documents/AOR-003.pdf" },
    { id: "AOR-004", type: "AOR Based", asset: "Township T4", owner: "Deepa Shah", date: "2024-03-04", status: "Completed", pdfUrl: "/documents/AOR-004.pdf" },
    { id: "AOR-005", type: "AOR Based", asset: "Housing Society H5", owner: "Karan Singh", date: "2024-03-05", status: "Active", pdfUrl: "/documents/AOR-005.pdf" },
    { id: "AOR-006", type: "AOR Based", asset: "Gated Community G6", owner: "Maya Iyer", date: "2024-03-06", status: "Pending", pdfUrl: "/documents/AOR-006.pdf" },
    { id: "AOR-007", type: "AOR Based", asset: "Premium Towers P7", owner: "Arjun Nair", date: "2024-03-07", status: "Active", pdfUrl: "/documents/AOR-007.pdf" },
    { id: "AOR-008", type: "AOR Based", asset: "Eco Homes E8", owner: "Ritu Sharma", date: "2024-03-08", status: "Completed", pdfUrl: "/documents/AOR-008.pdf" },
    { id: "AOR-009", type: "AOR Based", asset: "Smart City S9", owner: "Vivek Mehta", date: "2024-03-09", status: "Active", pdfUrl: "/documents/AOR-009.pdf" },
    { id: "AOR-010", type: "AOR Based", asset: "Lake View L10", owner: "Pooja Reddy", date: "2024-03-10", status: "Pending", pdfUrl: "/documents/AOR-010.pdf" }
  ]
};

export default function RegistryExplorer() {
  const [filter, setFilter] = useState('follower');
  const [search, setSearch] = useState('');
  const [assetType, setAssetType] = useState('urban');
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  // Get background color based on asset type
  const getBgColor = () => assetType === 'rural' ? 'bg-[#2C4A3B]' : 'bg-[#1A2C42]';
  const getSecondaryBgColor = () => assetType === 'rural' ? 'bg-[#1F3329]' : 'bg-[#111A27]';
  const getBorderColor = () => assetType === 'rural' ? 'border-[#2C4A3B]' : 'border-[#1A2C42]';

  // Fetch documents from API and combine with static data
  const fetchDocuments = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Get static data based on filter
      const staticData = filter === 'follower' ? sampleData.follower : sampleData.aor;
      
      // Fetch dynamic data from API
      try {
        const response = await axios.get('http://192.168.74.202:5000/documents');
        if (response.data.status === 'success') {
          // Filter dynamic data based on current filter
          const dynamicData = response.data.documents.filter(doc => 
            doc.type.toLowerCase().includes(filter.toLowerCase())
          );
          // Combine static and dynamic data
          setDocuments([...staticData, ...dynamicData]);
        }
      } catch (apiError) {
        console.error('API Error:', apiError);
        // If API fails, still show static data
        setDocuments(staticData);
      }
    } catch (err) {
      setError('Error loading documents');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch documents when filter changes
  useEffect(() => {
    fetchDocuments();
  }, [filter]);

  // Filter documents based on search
  const filteredDocuments = documents.filter(doc => {
    if (!search) return true;
    const searchLower = search.toLowerCase();
    return (
      doc.id.toLowerCase().includes(searchLower) ||
      doc.owner.toLowerCase().includes(searchLower) ||
      doc.asset.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className={`min-h-screen ${getBgColor()} pt-28 px-2 md:px-0 text-gray-200 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto relative animate-fade-in">
        {/* Profile icon top right */}
        <div className="absolute top-0 right-0 mt-4 mr-4 z-10">
          <button className={`flex items-center justify-center w-12 h-12 rounded-full ${getSecondaryBgColor()} shadow-lg hover:opacity-90 transition border ${getBorderColor()}`}>
            <IconUserBolt className="h-7 w-7 text-gray-200" />
          </button>
        </div>
        <div className={`${getSecondaryBgColor()} rounded-2xl shadow-2xl px-8 py-10 md:py-12 md:px-12 border ${getBorderColor()} transition-colors duration-300`}>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-100 tracking-tight text-center drop-shadow-sm">Plotwise Registry Document Explorer</h1>
          
          {/* Statistics Card */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-center">
            {stats.map((stat, i) => (
              <div key={stat.label} className={`flex-1 rounded-xl shadow p-6 flex flex-col items-center ${getSecondaryBgColor()} font-semibold text-lg min-w-[160px] border ${getBorderColor()} transition-colors duration-300`}>
                <span className="text-2xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm font-medium">{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Asset Type Toggle */}
          <div className="flex justify-center mb-6">
            <div className={`flex ${getSecondaryBgColor()} rounded-full shadow-inner p-1 w-fit border ${getBorderColor()} transition-colors duration-300`}>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'rural' ? `${getBgColor()} text-gray-100 shadow` : 'text-gray-200 hover:opacity-80'}`}
                onClick={() => setAssetType('rural')}
                type="button"
              >
                <span role="img" aria-label="Rural">🌾</span> Rural
              </button>
              <button
                className={`flex items-center gap-2 px-6 py-2 rounded-full transition-all duration-200 font-semibold text-base
                  ${assetType === 'urban' ? `${getBgColor()} text-gray-100 shadow` : 'text-gray-200 hover:opacity-80'}`}
                onClick={() => setAssetType('urban')}
                type="button"
              >
                <span role="img" aria-label="Urban">🏙️</span> Urban
              </button>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-3 mb-8 items-center justify-center">
            <select
              value={filter}
              onChange={e => setFilter(e.target.value)}
              className={`${getSecondaryBgColor()} border ${getBorderColor()} rounded-l-lg px-5 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-400 text-base shadow-sm transition-colors duration-300`}
            >
              <option value="follower">Follower Based</option>
              <option value="aor">AOR Based</option>
            </select>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by Registry ID, Owner, Asset..."
              className={`flex-1 ${getSecondaryBgColor()} border ${getBorderColor()} rounded-r-lg px-5 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-400 text-base shadow-sm min-w-[200px] placeholder-gray-400 transition-colors duration-300`}
            />
            <button 
              onClick={fetchDocuments}
              className={`${getSecondaryBgColor()} text-gray-100 px-6 py-3 rounded-lg ml-0 md:ml-2 hover:opacity-90 transition font-semibold shadow-sm border ${getBorderColor()} transition-colors duration-300`}
            >
              Search
            </button>
          </div>

          {/* Documents Table */}
          <div className={`${getBgColor()} rounded-xl shadow-lg p-6 border ${getBorderColor()} transition-colors duration-300`}>
            <h2 className="text-xl font-bold mb-6 text-gray-100 text-center">Latest Registry Documents</h2>
            
            {error && (
              <div className="text-red-400 text-center mb-4 p-4 rounded-lg bg-red-400/10">
                {error}
              </div>
            )}
            
            {loading ? (
              <div className="text-center py-8">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-gray-200 border-t-transparent"></div>
                <p className="mt-2 text-gray-400">Loading documents...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full text-base rounded-xl overflow-hidden">
                  <thead>
                    <tr className={`${getSecondaryBgColor()} text-gray-100 transition-colors duration-300`}>
                      <th className="py-3 px-4 text-left font-semibold">Registry ID</th>
                      <th className="py-3 px-4 text-left font-semibold">Type</th>
                      <th className="py-3 px-4 text-left font-semibold">Asset</th>
                      <th className="py-3 px-4 text-left font-semibold">Owner</th>
                      <th className="py-3 px-4 text-left font-semibold">Date</th>
                      <th className="py-3 px-4 text-left font-semibold">Status</th>
                      <th className="py-3 px-4 text-left font-semibold">Document</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocuments.map((doc, idx) => (
                      <tr key={doc.id} className={
                        `border-b last:border-b-0 ${idx % 2 === 0 ? getSecondaryBgColor() : getBgColor()} hover:opacity-90 transition-colors duration-300`
                      }>
                        <td className="py-3 px-4 font-mono font-medium">{doc.id}</td>
                        <td className="py-3 px-4">{doc.type}</td>
                        <td className="py-3 px-4">{doc.asset}</td>
                        <td className="py-3 px-4">{doc.owner}</td>
                        <td className="py-3 px-4">{doc.date}</td>
                        <td className="py-3 px-4">
                          <span className={
                            doc.status === 'Active' ? 'text-green-400 font-semibold' :
                            doc.status === 'Pending' ? 'text-yellow-400 font-semibold' :
                            'text-blue-400 font-semibold'
                          }>{doc.status}</span>
                        </td>
                        <td className="py-3 px-4">
                          <a
                            href={doc.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:text-blue-300 underline"
                          >
                            View PDF
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>

          {/* Recent Activity Section */}
          <div className={`${getBgColor()} rounded-xl shadow-lg p-6 border ${getBorderColor()} mt-8 transition-colors duration-300`}>
            <h2 className="text-xl font-bold mb-6 text-gray-100 text-center">Recent Activity</h2>
            <ul className="space-y-4">
              {recent.map((item, idx) => (
                <li key={idx} className={
                  `flex items-center gap-4 p-4 rounded-lg ${getSecondaryBgColor()} border-l-4 ${getBorderColor()} transition-colors duration-300`
                }>
                  <span className={`flex items-center justify-center w-12 h-12 rounded-full text-2xl font-bold shadow ${getBgColor()} text-gray-200 transition-colors duration-300`}>{item.icon}</span>
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