import React from "react";
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
import { faker } from '@faker-js/faker';


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

let labels = ['Football', 'Basketball', 'Tennis', 'Hurdles', 'Baseball', 'Wrestling'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Number of Students',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const BarChartComponent = () => {
  const dropdown = document.getElementById('dropdown-basic');
  if(dropdown) { 
    dropdown.addEventListener('change', changeChart)
  }
  function changeChart() {
    console.log(dropdown.value)
    dropdown.value.split(',')
    labels = dropdown.value.split(',');
  }
  return(
    <div className="bar-component">
      <select id="dropdown-basic">
        <option value="'Football', 'Basketball', 'Tennis', 'Baseball'">Balls</option>
        <option value="'Hurdles', 'Wrestling'">Without Balls </option>
      </select>
      <Bar options={options} data={data} className="components"/>
    </div>
  )
}

export default BarChartComponent