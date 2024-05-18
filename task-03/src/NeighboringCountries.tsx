import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface CountryData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
  vaccinations?: number;
}

export const NeighboringCountries: React.FC = () => {
  const [countriesData, setCountriesData] = useState<CountryData[]>([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      const response = await axios.get('https://disease.sh/v3/covid-19/countries');
      setCountriesData(response.data.slice(0, 5)); // Assuming we need data for the first 5 countries
    };

    fetchCountriesData();
  }, []);

  return (
    <div>
      <h1>Neighboring Countries Page</h1>
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Recovered</th>
            <th>Vaccinations</th>
          </tr>
        </thead>
        <tbody>
          {countriesData.map((country) => (
            <tr key={country.country}>
              <td>{country.country}</td>
              <td>{country.cases}</td>
              <td>{country.deaths}</td>
              <td>{country.recovered}</td>
              <td>{country.vaccinations || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

