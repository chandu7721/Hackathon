import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Affected} from './Affected';
import {NeighboringCountries} from './NeighboringCountries';
import {Vaccinated} from './Vaccinated';

function App() {
  return <><Affected />
  <Vaccinated />
  <NeighboringCountries /></>
}

export default App;
