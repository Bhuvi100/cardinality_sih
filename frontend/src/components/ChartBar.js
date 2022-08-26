import React from 'react';
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
    
    },
  },
};

const labels = ['February', 'March', 'April', 'May', 'June', 'July','August'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Twitter',
      data: [1,5,8,2,5,7,1],
      backgroundColor: 'rgba(255, 99, 132)',
    },
    {
      label: 'Gmail',
      data: [2,5,4,3,6,8,2],
      backgroundColor: 'rgba(53, 162, 235)',
    },
    {
        label: 'Portal',
        data: [1,6,3,4,9,7,6],
        backgroundColor: 'rgba(34,139,34)',
      },
  ],
};

export function ChartBar() {
  return (
<div className='md:w-4/5 w-5/6 md:ml-10'>
<Bar options={options} data={data} />
</div>
  )
}
