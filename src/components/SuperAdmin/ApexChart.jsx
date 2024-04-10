import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./superAdminDashboard.css";

const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 680,
        options: {
          chart: {
            width: 400,
            height:"80px"
          },
          legend: {
            position:'bottom'
          }
        }
      }]
    }
  });

  return (
    <div>
     
      <div id="chart"
      class="max-w-sm w-full h-auto bg-white rounded-lg  dark:bg-gray-800 p-4 md:p-6 mt-2 mr-3 border "
      > 
      <h1 className="text-[18px] text-[#5a1d65] mb-3">User Registrations</h1>
      
        <ReactApexChart options={chartData.options}
        series={chartData.series} 
         type="donut"  
         />
         <h3 className='text-[14px] text-[#842569] mt-4'>No. of User Registered Today</h3>
         <h3 className='text-[14px] text-[#842569] mt-2'>REPORTS</h3>

      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
}

export default ApexChart;