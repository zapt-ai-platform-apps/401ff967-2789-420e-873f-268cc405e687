import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    try {
      console.log("Fetching weather data");
      const apiKey = import.meta.env.VITE_PUBLIC_OPEN_WEATHER_API_KEY;
      const city = 'London';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) throw new Error('Failed to fetch weather data');
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Weather</h2>
      {loading && <div>Loading weather data...</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
      {weather && (
        <div>
          <p className="text-lg">{weather.name}</p>
          <p>Temperature: {weather.main.temp} °C</p>
          <p>Conditions: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
        </div>
      )}
      <button onClick={fetchWeather} className="cursor-pointer bg-blue-500 px-4 py-2 rounded mt-4">
        Refresh
      </button>
    </div>
  );
};

export default Weather;