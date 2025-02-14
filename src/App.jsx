import React, { useState } from 'react';
import PrivateChat from './screens/PrivateChat';
import WalkieTalkie from './screens/WalkieTalkie';
import Weather from './screens/Weather';
import Time from './screens/Time';
import Compass from './screens/Compass';
import LoginForm from './features/auth/LoginForm';
import useAuth from './features/auth/useAuth';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

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
        return <Time />;
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
      <Navigation setActiveTab={setActiveTab} signOut={signOut} />
      <main className="p-4">
        {renderActiveTab()}
      </main>
      <Footer />
    </div>
  );
}