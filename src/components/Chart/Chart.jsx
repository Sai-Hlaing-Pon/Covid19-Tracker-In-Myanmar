import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';


const Chart = ({data:{confirmed, recovered, deaths}, country}) => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
       
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length //0
            ? (
                <Line
                    data={{ 
                        labels: dailyData.map(({date}) => date),
                        datasets: [{
                            data: dailyData.map(({confirmed}) => confirmed),
                            label: 'အတည်ပြု',
                            borderColor: 'blue',
                            fill: true,
                        }, {
                            data: dailyData.map(({deaths}) => deaths),
                            label: 'သေဆုံးသူ',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255. 0, 0, 0.5)',
                            fill: true,
                        }],
                    }}
                />) : null
    );
    
    console.log(confirmed, recovered, deaths);

    const barChart= (
        confirmed 
        ? (
            <Bar 
              data={{
                labels :[ 'အတည်ပြု', 'ပြန်လည်ကောင်းမွန်', 'သေဆုံး'], 
                datasets: [{
                    label: 'people',
                    backgroundColor: [
                        'rgb(143, 98, 231)',
                        'rgb(2, 255, 100)',
                        'rgb(255, 18, 16)',
                    ],
                    data:[confirmed.value, recovered.value, deaths.value]
                }]

              }}
              option={{
                  legend: {display: false},
                  title: { display: true, text:'Current state in ${country}'},
              }}
            />
        ): null
    )

    return (
    <div className={styles.container}>
        {country ? barChart :lineChart}
    </div>
    )
}

export default Chart;