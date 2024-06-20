// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/TimingTable.css';

const TimingTable = () => {
  return (
    <div className="timing-table">
      <h2>Meal Timings</h2>
      <table>
        <thead>
          <tr>
            <th>Meal</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            <td>8:00 AM - 9:30 AM</td>
          </tr>
          <tr>
            <td>Lunch</td>
            <td>12:00 PM - 2:00 PM</td>
          </tr>
          <tr>
            <td>Dinner</td>
            <td>7:00 PM - 9:00 PM</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimingTable;
