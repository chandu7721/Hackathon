import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface VaccineData {
  country: string;
  timeline: { [date: string]: number };
}

 export const Vaccinated: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('India');
  const [vaccineData, setVaccineData] = useState<VaccineData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://disease.sh/v3/covid-19/vaccine/coverage/countries/${selectedCountry}?lastdays=30`);
      setVaccineData(response.data);
    };

    fetchData();
  }, [selectedCountry]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const formatChartData = (data: { [date: string]: number }): { date: string; count: number }[] => {
    return Object.keys(data).map((date) => ({ date, count: data[date] }));
  };

  return (
    <div>
      <h1>Vaccinated Page</h1>
      <div>
        <label htmlFor="countrySelect">Select Country:</label>
        <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add other countries as options */}
        </select>
      </div>
      {vaccineData && (
        <div>
          <h2>{vaccineData.country}</h2>
          <LineChart width={600} height={300} data={formatChartData(vaccineData.timeline)}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="count" stroke="#82ca9d" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
      )}
    </div>
  );
};


