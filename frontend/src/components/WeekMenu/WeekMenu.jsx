// eslint-disable-next-line no-unused-vars
import React from 'react';
import classes from './index.module.css';
import { Table } from 'antd';

// eslint-disable-next-line react/prop-types
const WeekMenu = ({ menu, loading }) => {
    const columns = [
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day',
            render: (text) => <strong>{text}</strong>,
        },
        {
            title: 'Breakfast',
            dataIndex: 'breakfast',
            key: 'breakfast',
            render: (text) => <span>{text.text}</span>,
        },
        {
            title: 'Lunch',
            dataIndex: 'lunch',
            key: 'lunch',
            render: (text) => <span>{text.text}</span>,
        },
        {
            title: 'Dinner',
            dataIndex: 'dinner',
            key: 'dinner',
            render: (text) => <span>{text.text}</span>,
        },
    ];

    return (
        <div className={classes.weekMenu}>
            <Table
                dataSource={menu}
                columns={columns}
                pagination={false}
                loading={loading}
                bordered
            />
        </div>
    );
}

export default WeekMenu;
