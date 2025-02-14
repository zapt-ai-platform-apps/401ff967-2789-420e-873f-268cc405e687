import React, { useState } from 'react';
import { PrivateChat, WalkieTalkie, Weather, TimeComponent, Compass } from './components/Tabs';
import { LoginForm, useAuth } from './features/auth/Auth';

export default function App() {
  const { session, signOut } = useAuth();
  const [activeTab, setActiveTab] = useState('privateChat');

  const renderActiveTab = () => {
    switch(activeTab) {
      case 'privateChat':
        console.log('Rendering Private Chat');
        return <PrivateChat />;
      case 'walkieTalkie':
        console.log('Rendering Walkie Talkie');
        return <WalkieTalkie />;
      case 'weather':
        console.log('Rendering Weather');
        return <Weather />;
      case 'time':
        console.log('Rendering Time');
        return <TimeComponent />;
      case 'compass':
        console.log('Rendering Compass');
        return <Compass />;
      default:
        return <div>Select a tab</div>;
    }
  };

  if (!session) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen text-gray-900">
      <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
        <nav className="flex space-x-4">
          <button onClick={() => setActiveTab('privateChat')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">Private Chat</button>
          <button onClick={() => setActiveTab('walkieTalkie')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">Walkie Talkie</button>
          <button onClick={() => setActiveTab('weather')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">Weather</button>
          <button onClick={() => setActiveTab('time')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">Time</button>
          <button onClick={() => setActiveTab('compass')} className="cursor-pointer px-3 py-1 bg-blue-500 rounded">Compass</button>
        </nav>
        <button onClick={() => { console.log("Signing out"); signOut(); }} className="cursor-pointer bg-red-500 px-3 py-1 rounded">
          Sign Out
        </button>
      </header>
      <main className="p-4">
        {renderActiveTab()}
      </main>
      <footer className="fixed bottom-0 left-0 right-0 p-2 bg-gray-200 text-center">
        <a href="https://www.zapt.ai" target="_blank" rel="noopener noreferrer" className="text-blue-700 underline cursor-pointer">
          Made on ZAPT
        </a>
      </footer>
    </div>
  );
}