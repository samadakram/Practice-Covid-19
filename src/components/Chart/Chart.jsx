import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { line, Bar } from 'react-chartjs-2';

import styles from'./Chart.module.css';

const Chart = () => {

    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }

        fetchAPI();

    });

    const lineChart = ();

    return (
        <div>Chart</div>
    )
}

export default Chart;