import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
}

interface HistoricalData {
  cases: { [date: string]: number };
  deaths: { [date: string]: number };
  recovered: { [date: string]: number };
}

export const Affected: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('India');
  const [countryData, setCountryData] = useState<CountryData | null>(null);
  const [historicalData, setHistoricalData] = useState<HistoricalData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const countryResponse = await axios.get(`https://disease.sh/v3/covid-19/countries/${selectedCountry}`);
      const historicalResponse = await axios.get(`https://disease.sh/v3/covid-19/historical/${selectedCountry}?lastdays=all`);

      setCountryData(countryResponse.data);
      console.log(countryData);
      setHistoricalData(historicalResponse.data.timeline);
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
      <h1>Affected Page</h1>
      <div>
        <label htmlFor="countrySelect">Select Country:</label>
        <select id="countrySelect" value={selectedCountry} onChange={handleCountryChange}>
          <option value="India">India</option>
          <option value="USA">USA</option>
          {/* Add other countries as options */}
        </select>
      </div>
      {countryData && (
        <div>
          <h2>{countryData.country}</h2>
          <p>Cases: {countryData.cases}</p>
          <p>Deaths: {countryData.deaths}</p>
          <p>Recovered: {countryData.recovered}</p>
        </div>
      )}
      {historicalData && (
        <div>
          <h3>Historical Data</h3>
          <LineChart width={600} height={300} data={formatChartData(historicalData.cases)}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="count" stroke="#8884d8" />
            <Tooltip />
            <Legend />
          </LineChart>
        </div>
      )}
    </div>
  );
};

