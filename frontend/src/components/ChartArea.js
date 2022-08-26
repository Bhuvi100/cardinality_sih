import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
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
      text: 'Total Registrations',
    },
  },
};

const labels = ['February', 'March', 'April', 'May', 'June', 'July','August'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Till date',
      data: [2,4,3,5,6,8,6],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export function ChartArea() {
  return (
    <div className='h-96 w-1/2 ml-80 mx-auto '>
        <Line options={options} data={data} />
    </div>
  )
  
}
