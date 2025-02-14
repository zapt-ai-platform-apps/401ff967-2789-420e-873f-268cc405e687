import React from 'react';

export default function Navigation({ setActiveTab, signOut }) {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
      <nav className="flex space-x-4">
        <button onClick={() => setActiveTab('privateChat')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">
          Private Chat
        </button>
        <button onClick={() => setActiveTab('walkieTalkie')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">
          Walkie Talkie
        </button>
        <button onClick={() => setActiveTab('weather')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">
          Weather
        </button>
        <button onClick={() => setActiveTab('time')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">
          Time
        </button>
        <button onClick={() => setActiveTab('compass')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">
          Compass
        </button>
      </nav>
      <button
        onClick={() => {
          console.log("Signing out");
          signOut();
        }}
        className="cursor-pointer bg-red-500 px-3 py-1 rounded"
      >
        Sign Out
      </button>
    </header>
  );
}