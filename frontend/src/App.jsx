// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar';
import WeekMenu from './components/WeekMenu';
import { Table } from 'antd';

function App() {
    // Example menu data for all 7 days
    const menuData = [
        {
            key: 'Monday',
            day: 'Monday',
            breakfast: { text: 'Eggs and Toast', selected: true },
            lunch: { text: 'Chicken Salad', selected: false },
            dinner: { text: 'Spaghetti', selected: false },
        },
        {
            key: 'Tuesday',
            day: 'Tuesday',
            breakfast: { text: 'Pancakes', selected: false },
            lunch: { text: 'Beef Stew', selected: true },
            dinner: { text: 'Fish Tacos', selected: false },
        },
        {
            key: 'Wednesday',
            day: 'Wednesday',
            breakfast: { text: 'Oatmeal', selected: false },
            lunch: { text: 'Vegetable Stir-Fry', selected: false },
            dinner: { text: 'Grilled Chicken', selected: true },
        },
        {
            key: 'Thursday',
            day: 'Thursday',
            breakfast: { text: 'Yogurt with Fruit', selected: false },
            lunch: { text: 'Pasta Primavera', selected: false },
            dinner: { text: 'Shrimp Scampi', selected: false },
        },
        {
            key: 'Friday',
            day: 'Friday',
            breakfast: { text: 'Bagel with Cream Cheese', selected: false },
            lunch: { text: 'Caesar Salad', selected: false },
            dinner: { text: 'Steak with Potatoes', selected: false },
        },
        {
            key: 'Saturday',
            day: 'Saturday',
            breakfast: { text: 'French Toast', selected: false },
            lunch: { text: 'Tuna Sandwich', selected: false },
            dinner: { text: 'Vegetarian Pizza', selected: false },
        },
        {
            key: 'Sunday',
            day: 'Sunday',
            breakfast: { text: 'Pancakes', selected: false },
            lunch: { text: 'Beef Stew', selected: true },
            dinner: { text: 'Fish Tacos', selected: false },
        },
    ];

    // Example timings data
    const timingsData = [
        { meal: 'Breakfast', timing: '7:00 AM' },
        { meal: 'Lunch', timing: '12:00 PM' },
        { meal: 'Dinner', timing: '6:00 PM' },
        // Add more timings as needed
    ];

    const columns = [
        {
            title: 'Meal',
            dataIndex: 'meal',
            key: 'meal',
        },
        {
            title: 'Timing',
            dataIndex: 'timing',
            key: 'timing',
        },
    ];

    return (
        <div className="App">
            <MenuBar />
            <h1 className="pageHeading">Mess Portal</h1>
            <div className="contentContainer">
                <div className="timingsTable">
                    <h2>Timings Table</h2>
                    <Table
                        dataSource={timingsData}
                        columns={columns}
                        pagination={false}
                        bordered
                    />
                </div>
                <div className="weekMenu">
                    <h2>Weekly Menu</h2>
                    <WeekMenu
                        menu={menuData}
                        mobile={false}
                        highlight={true}
                        loading={false}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
