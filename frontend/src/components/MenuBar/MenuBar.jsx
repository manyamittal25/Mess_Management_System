// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import {
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
    ShoppingCartOutlined,
    QrcodeOutlined,
    CalendarOutlined,
    TableOutlined,
    SettingOutlined,
    SolutionOutlined,
    ScanOutlined
} from '@ant-design/icons';
import { Menu, message } from 'antd';
import classes from './index.module.css';

const MenuBar = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState(false);

    // Dummy data for timings (adjust as per your actual data structure)
    const timingsData = [
        { meal: 'Breakfast', time: '07:00 AM' },
        { meal: 'Lunch', time: '12:30 PM' },
        { meal: 'Dinner', time: '07:30 PM' }
    ];

    // Fetch status on component mount
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(window.APIROOT + 'api/data/status');
                setStatus(response.data);
            } catch (error) {
                message.error('Failed to fetch data from server');
            }
        };
        fetchData();
    }, []);

    return (
        <div className={classes.menu}>
            <div className={classes.logo}><span>Mess Portal</span></div>
            <motion.div className={classes.navWrap} animate={{ x: open ? 0 : "-15rem" }} transition={{ duration: 0.3 }}>
                <Menu className={classes.nav} theme="light" defaultSelectedKeys={['1']} mode="inline" onClick={() => setOpen(!open)}>
                    {status.loggedIn ? (
                        <>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                                <a href={status.loggedIn ? 'api/auth/signout' : '/api/auth/signin'}>
                                    {status.loggedIn ? 'Sign out' : 'Sign in'}
                                </a>
                            </Menu.Item>
                            <Menu.Divider />
                            <Menu.Item key="3" icon={<TableOutlined />}>
                                <Link to="/">Schedule</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<ShoppingCartOutlined />}>
                                <Link to="/buy-coupons">Buy coupons</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<CalendarOutlined />}>
                                <Link to="/purchase-history">Purchase history</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<QrcodeOutlined />}>
                                <Link to="/qr-code">QR code</Link>
                            </Menu.Item>
                            {status.admin && (
                                <>
                                    <Menu.Divider />
                                    <Menu.Item key="7" icon={<SettingOutlined />}>
                                        <Link to="/admin">Admin panel</Link>
                                    </Menu.Item>
                                    <Menu.Item key="8" icon={<SolutionOutlined />}>
                                        <Link to="/total-meals">Total meals</Link>
                                    </Menu.Item>
                                    <Menu.Item key="9" icon={<ScanOutlined />}>
                                        <Link to="/scan-qr">Scan QR code</Link>
                                    </Menu.Item>
                                </>
                            )}
                            <Menu.Divider />
                            <Menu.SubMenu key="10" title="Timings" >
                                {timingsData.map((item, index) => (
                                    <Menu.Item key={`timing-${index}`}>
                                        <span>{item.meal}</span>
                                        <span className={classes.timing}>{item.time}</span>
                                    </Menu.Item>
                                ))}
                            </Menu.SubMenu>
                        </>
                    ) : null}
                </Menu>
                <div className={classes.navBtn} onClick={() => setOpen(!open)}>
                    {open ? <CloseOutlined /> : <MenuOutlined />}
                </div>
                <div className={classes.logoCover}></div>
            </motion.div>
            <div className={classes.gap} />
        </div>
    );
}

export default MenuBar;
