import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js'; 
import UsersWidget from "./UsersWidget";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Divider } from '@mui/material';

Chart.register(ArcElement, Tooltip, Legend);

const chartData = {
  labels: ['Admin', 'Rol 1', 'Rol 2', 'Rol Yok'],
  datasets: [
    {
      data: [30, 40, 20, 10], 
      backgroundColor: ['#4C86E8', '#FF7B25', '#32C15E', '#FFC107'], 
      hoverBackgroundColor: ['#3A6DB1', '#FF661C', '#28A245', '#FFB900'], 
      borderWidth: 2,
    },
  ],
};

const chartOptions = {
  cutout: '70%', 
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
};

export default function DonutChart() {
  return (

        <div className="card max-w-[350px] ">
<div className="flex justify-between py-4 px-8 pb-5 items-center">
        <h1 className="!text-base">Rol Dağılımı</h1>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          color="#78829D"
          className="pr-4"
        />

      </div>                    <Divider />
      <Doughnut data={chartData} options={chartOptions} className='p-10 '/>
        </div>
  );
}
