
var chart = new Highcharts.chart({
    chart: {
      renderTo: 'highcharts-1',
      type: 'line',
      height: 400,
      width: 500,
  },
    data: {
      csvURL: 'https://raw.githubusercontent.com/Shanaida/project-2-csvs/master/macrodata_updaterecs.csv'
  },
    title: {
      text: 'Macroeconomic Indicators vs. P/E Ratio During Recession Periods'
  }
});    
  
