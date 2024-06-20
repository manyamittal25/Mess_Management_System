// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/WeekMenuTable.css';

const WeekMenuTable = () => {
  return (
    <div className="week-menu-table">
      <h2>Weekly Menu</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Breakfast</th>
            <th>Lunch</th>
            <th>Dinner</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
          <tr>
            <td>Sunday</td>
            <td>Breakfast Item 1, Breakfast Item 2</td>
            <td>Lunch Item 1, Lunch Item 2</td>
            <td>Dinner Item 1, Dinner Item 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeekMenuTable;
