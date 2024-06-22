import classes from './index.module.css'
import {Table,message} from 'antd';
import {useMediaQuery} from 'react-responsive';
import WeekMenu from '../../components/WeekMenu';
import axios from 'axios';
import {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

const timingCol=[
    {
        title:'Meal',
        dataIndex:'meal',
        key:'meal',
        render:(text)=>({
            props:{
                style:{background:"#FAFAFA"}
            },
            children:<span style={{fontWeight: 500 }}>{text}</span>
        })
    },
    {
        title:'Time',
        dataIndex:'time',
        key:'time'
    }
];

export default function SchedulePage(){
    const isMobile=useMediaQuery({query:'(max-width: 768px)'});
    const [timingRows,setTimingRows]=useState([]);
    const [menu,setMenu]=useState([]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                let response = await axios.get(window.APIROOT+'/api/data/time');
                setTimingRows(response.data);
            }catch(error){
                message.error('Failed to fetch timing data from server');
            }
        }
        fetchData();
    },[]);

    useEffect(()=>{
        const fetchData=async()=>{
            try{
                let response = await axios.get(window.APIROOT+'/api/data/menu');
                setMenu(response.data);
            }catch(error){
                message.error('Failed to fetch menu data from server');
            }
        }
        fetchData();
    },[]);

    return(
        <div className={classes.menuBody}>
            <h1>Timing</h1>
            <Table loading={!timingRows.length} className={classes.table} columns={timingCol} dataSource={timingRows} pagination={false} bordered={true} />
            <h1>MENU</h1>
            <motion.div layout>
                <WeekMenu loading={!menu.length} menu={menu} mobile={mobile} />
            </motion.div>
        </div>
    );
}