import React, { useState, useEffect } from "react";
import "./bar-chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Number of Students per Sports',
    },
  },
};

const BarChartComponent = () => {
  const dropdown = document.getElementById('dropdown-basic');
  const [data, setData] = useState({
    datasets: [],
   })
    useEffect(() => {
      setData({
        labels: ['Football', 'Basketball', 'Tennis', 'Hurdles', 'Baseball', 'Wrestling'],
        datasets: [
          {
            label: 'Number of Students',
            data: [500, 300, 100, 150, 200, 400],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      })
    }, [])

  if(dropdown) { 
    dropdown.addEventListener('change', changeChart)
  }
  function changeChart() {
    dropdown.value.split(',')
    setData({
      labels: dropdown.value.split(',')
    })
  }
  return(
    <div className="bar-component">
      <select id="dropdown-basic">
        <option value="'Football', 'Basketball', 'Tennis', 'Baseball'">Sport with balls</option>
        <option value="'Hurdles', 'Wrestling'"> Sports without balls </option>
        <option value="'Football', 'Basketball', 'Tennis', 'Hurdles', 'Baseball', 'Wrestling'">All Sports</option>
      </select>
      <Bar options={options} data={data} className="components"/>
    </div>
  )
}

export default BarChartComponent