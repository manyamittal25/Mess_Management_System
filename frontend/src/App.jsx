// eslint-disable-next-line no-unused-vars
import React from 'react';
import Heading from './components/Heading';
import TimingTable from './components/TimingTable';
import WeekMenuTable from './components/WeekMenuTable';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Heading />
      <TimingTable />
      <WeekMenuTable />
    </div>
  );
}

export default App;

