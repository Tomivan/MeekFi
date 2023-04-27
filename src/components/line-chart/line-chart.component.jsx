import React from "react";
import "./line-chart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    title: {
      display: true,
      text: 'Revenue by Payment Method',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Cash',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Debit-Card',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Transfer',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(0, 255, 0)',
      backgroundColor: 'rgba(0, 255, 0, 0.5)',
    },
  ],
};
const LineChartComponent = () => {
  function showChartData(type) {
    const label = 'Cash'
    const debitCard = 'Debit-Card'
    const transfer = 'Transfer'

    if(type === 'Cash') {
      data.datasets[0].data = label;
    }
    if(type === 'Debit-Card') {
      data.datasets[0].data = debitCard;
    }
    if(type === 'Transfer') {
      data.datasets[0].data = transfer;
    }
  }
  return(
    <div className="line-component">
      <select id="dropdown-basic">
        <option onClick="showChartData('cash')">Cash</option>
        <option onClick="showChartData('debit-card')">Debit Card </option>
        <option onClick="showChartData('transfer')">Transfer </option>
      </select>
      <Line options={options} data={data} className="components"/>
    </div>
  );
}
export default LineChartComponent;
