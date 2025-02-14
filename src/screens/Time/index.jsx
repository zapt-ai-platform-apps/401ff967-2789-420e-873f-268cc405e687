import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    console.log("Starting clock");
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Current Time</h2>
      <p className="text-2xl">{currentTime.toLocaleTimeString()}</p>
    </div>
  );
};

export default Time;