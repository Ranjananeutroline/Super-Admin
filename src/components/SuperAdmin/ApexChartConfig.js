const series = [44, 55, 41];

const calculatePercentages = (series) => {
  const total = series.reduce((acc, value) => acc + value, 0);
  return series.map(value => ((value / total) * 100).toFixed(2));
};

const percentages = calculatePercentages(series);

const chartOptions = {
  chart: {
    type: 'donut',
    width: '100%',  
    height: 300     
  },
  colors: ['#C3ACD0', '#6DB9EF', '#9195F6'],
  dataLabels: {
    enabled: true,
    formatter: (val, opts) => {
      const seriesValue = opts.w.globals.series[opts.seriesIndex];
      const percentage = percentages[opts.seriesIndex];
      return `${seriesValue} (${percentage}%)`;
    },
    style: {
      fontSize: "12px", 
      fontWeight: "400",
    }
  },
  responsive: [
    {
      breakpoint: 1040,
      options: {
        chart: {
          width: '100%',  
          height: 180  
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
          width: '100%',  
          height: 210  
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
          width: '100%',  
          height: 180  
        },
        legend: {
          position: 'bottom'
        }
      }
    },
  ]
};

export { chartOptions, series };
