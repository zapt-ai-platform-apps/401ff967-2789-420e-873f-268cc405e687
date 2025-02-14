import React, { useState, useEffect } from 'react';

const Compass = () => {
  const [heading, setHeading] = useState(0);

  const handleOrientation = (event) => {
    const { alpha } = event;
    if (alpha !== null) {
      setHeading(Math.round(alpha));
    }
  };

  useEffect(() => {
    console.log("Setting up compass listener");
    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleOrientation, true);
    } else {
      console.error("Device orientation not supported");
    }
    return () => {
      window.removeEventListener('deviceorientation', handleOrientation);
    };
  }, []);

  return (
    <div className="p-4 border rounded shadow text-center">
      <h2 className="text-xl font-bold mb-4">Compass</h2>
      <div className="flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-blue-500 rounded-full relative">
          <div
            className="absolute top-1/2 left-1/2 bg-red-500 w-2 h-10"
            style={{ transform: `translate(-50%, -100%) rotate(${heading}deg)` }}
          ></div>
        </div>
      </div>
      <p className="mt-4">Heading: {heading}°</p>
    </div>
  );
};

export default Compass;