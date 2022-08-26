import React from 'react';
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
      position: 'top' ,
    },
    title: {
      display: true,
      text: "Total Query count"
      
    },
  },
};

const labels = ['February', 'March', 'April', 'May', 'June', 'July','August'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Registered',
      data: [1,4,2,5,6,3,8],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Resolved',
      data: [5,3,4,8,6,7,9],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    
  ],
};

export default function ChartLine() {
  return (
    <div className='md:ml-12 md:w-4/5 w-5/6'>
  <Line options={options} data={data}/>
  </div>
  )
}
