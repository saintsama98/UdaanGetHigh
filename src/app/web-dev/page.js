"use client";
import React, { useState, useRef } from "react";
import axios from 'axios';

export default function EntityRegistration() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    type: "",
    owner: "",
  });
  const [status, setStatus] = useState("");         
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const cancelTokenRef = useRef(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (submitted) {
      setSubmitted(false);
      setStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Cancel any ongoing request
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel('Operation canceled due to new request.');
    }

    // Create a new cancel token
    cancelTokenRef.current = axios.CancelToken.source();

    // If already loading or submitted, don't proceed
    if (loading || submitted) {
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const key = `${form.name}_${Date.now()}`;
      const value = JSON.stringify(form);
      
      const response = await axios({
        method: 'post',
        url: 'http://172.27.114.79:5000/store',
        data: { key, value },
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        cancelToken: cancelTokenRef.current.token,
        // Add timeout to prevent hanging requests
        timeout: 5000
      });

      if (response.status === 200) {
        setStatus("Entity registered and distributed to nodes!");
        setForm({ name: "", address: "", type: "", owner: "" });
        setSubmitted(true);
      } else {
        setStatus("Error registering entity.");
      }
    } catch (err) {
      if (axios.isCancel(err)) {
        console.log('Request canceled:', err.message);
      } else {
        console.error('Error details:', err);
        setStatus("Network error. Please check if the server is running.");
      }
    } finally {
      setLoading(false);
      // Clear the cancel token
      cancelTokenRef.current = null;
    }
  };

  // Cleanup on unmount
  React.useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Component unmounted');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#18181b] text-gray-200 flex flex-col items-center pt-24">
      <div className="bg-gradient-to-br from-[#5472E4] to-[#104D87] rounded-xl shadow-lg p-8 w-full max-w-xl border border-white/10 backdrop-blur-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">Entity Registration</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Entity Name"
            required
            disabled={loading}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 disabled:opacity-50 focus:outline-none focus:border-white/40 transition-colors"
          />
          <input
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Address"
            required
            disabled={loading}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 disabled:opacity-50 focus:outline-none focus:border-white/40 transition-colors"
          />
          <input
            name="type"
            value={form.type}
            onChange={handleChange}
            placeholder="Type (e.g., Residential, Commercial)"
            required
            disabled={loading}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 disabled:opacity-50 focus:outline-none focus:border-white/40 transition-colors"
          />
          <input
            name="owner"
            value={form.owner}
            onChange={handleChange}
            placeholder="Owner Name"
            required
            disabled={loading}
            className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/70 disabled:opacity-50 focus:outline-none focus:border-white/40 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? 'bg-white/20 cursor-not-allowed' : 'bg-white/10 hover:bg-white/20'
            } text-white rounded-lg py-2 px-4 mt-2 transition-colors border border-white/20`}
          >
            {loading ? "Registering..." : "Register Entity"}
          </button>
        </form>
        {status && (
          <div className={`mt-4 text-center text-sm ${
            status.includes("Error") || status.includes("Network error")
              ? "text-red-400"
              : "text-green-400"
          }`}>
            {status}
          </div>
        )}
      </div>
    </div>
  );
}
