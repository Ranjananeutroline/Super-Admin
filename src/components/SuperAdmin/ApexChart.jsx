import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import "./superAdminDashboard.css";


const ApexChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 41],
    options: {
      chart: {
        type: 'donut',
        width: '100%',  // Default width
        height: 300     // Default height
      },
      colors: ['#C3ACD0', '#6DB9EF', '#9195F6'],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "12px", // Change color of the data labels here
          fontWeight: "200",
          colors: ['#FEFDED'],
        }
      },
      responsive: [
        {
          breakpoint: 1040,
          options: {
            chart: {
              width: '100%',  // Width for screens < 995px
              height: 180  // Height for screens < 995px
            },
            legend: {
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 995,
          options: {
            chart: {
              width: '100%',  // Width for screens < 995px
              height: 210  // Height for screens < 995px
            },
            legend: {
              position: 'bottom'
            }
          }
        },
         {
          breakpoint: 620,
          options: {
            chart: {
              width: '100%',  // Width for screens < 995px
              height: 200  // Height for screens < 995px
            },
            legend: {
              position: 'bottom'
            },
            dataLabels: {
              style: {
                fontSize: "10.5px", 
                
               
              }
            }
          }
        },
      ]
    }
  });

  return (
    <div>
     
     
      <div id="chart"
      class="w-full h-auto bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 mt-2 mr-3 border"
      > 
      <h1 className="text-[18px] text-[#5a1d65] mb-3">User Registrations</h1>
      
      <div className='chart-second-div'>

      <ReactApexChart options={chartData.options}
        series={chartData.series} 
         type="donut"  
         />

         <div className='chart-heading'>
         <h3 className='text-[14px] text-[#842569] mt-4 chart-no'>No. of User Registered Today</h3>
         <h3 className='text-[14px] text-[#842569] mt-2'>REPORTS</h3>
         </div>
        

      </div>
        

      </div>
      {/* <div id="html-dist"></div> */}
    </div>
  );
}

export default ApexChart;