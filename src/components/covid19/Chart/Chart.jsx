import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../Api/index'
import { Line, Bar } from 'react-chartjs-2'
const Charts = ({ data: { confirmed, recovered, deaths }, country }) => {

    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchAPI()
    },[])

    // const barChart = ()
    const lineChart = (
        dailyData.length // 0
            ? (
                <Line
                    data={{
                        labels: dailyData.map(({ date }) => date),
                        datasets: [{
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#333fff',
                            fill: true
                        }, {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            fill: true
                        }]
                    }}
                />) : null
    )

    const barChart = (
        confirmed
            ? (
                <Bar
                    data={{
                        labels: ['Infected', 'Recovered', 'Deaths'],
                        datasets: [{
                            label: 'No. Of People',
                            backgroundColor: [
                                'rgba(0, 0, 255, 0.5)',
                                'rgba(0, 255, 0, 0.5)',
                                'rgba(255, 0, 0, 0.5)'
                            ],
                            data: [confirmed.value, recovered.value, deaths.value]
                        }]
                    }}
                    options={{
                        legend: { display: false },
                        title: { display: true, text: `Current Covid 19 updates in ${country}` }
                    }}
                />
            ) : null
    )
    return (
        <div>
            {country ? barChart: lineChart}
        </div>
    )

}
export default Charts