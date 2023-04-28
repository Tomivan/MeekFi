import React, { useEffect, useState} from "react";
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

const LineChartComponent = () => {
  const [ data, setData] = useState({
    datasets: []
  })
  useEffect(() => {
  setData({
    labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Cash',
        data: [200, 500, 300, 100, 350, 150, 200],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Debit-Card',
        data: [400, 600, 200, 350, 250, 100, 300],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'Transfer',
        data: [100, 400, 500, 250, 350, 150, 400],
        borderColor: 'rgb(0, 255, 0)',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
      },
    ],
  })
  }, [])
  const dropdown = document.getElementById('dropdown-basic');
  if(dropdown) { 
    dropdown.addEventListener('change', changeChart)
  }
  function changeChart() {
    let value = dropdown.value;
    console.log(value)
    if(value === "All") {
      setData({
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Cash',
            data: [200, 500, 300, 100, 350, 150, 200],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Debit-Card',
            data: [400, 600, 200, 350, 250, 100, 300],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Transfer',
            data: [100, 400, 500, 250, 350, 150, 400],
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
        ]
      })
    } else if(value === "Cash"){
      setData({
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Cash',
            data: [200, 500, 300, 100, 350, 150, 200],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ]
      })
    } else if(value === "Debit-card"){
      setData({
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Debit-Card',
            data: [400, 600, 200, 350, 250, 100, 300],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ]
      })
    } else {
      setData({
        labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Transfer',
            data: [100, 400, 500, 250, 350, 150, 400],
            borderColor: 'rgb(0, 255, 0)',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
          },
        ]
      })
    }
  }
  return(
    <div className="line-component">
      <select id="dropdown-basic">
        <option value="All">All</option>
        <option value="Cash">Cash</option>
        <option value="Debit-card">Debit Card </option>
        <option value="Transfer">Transfer </option>
      </select>
      <Line options={options} data={data} className="components"/>
    </div>
  );
}
export default LineChartComponent;
