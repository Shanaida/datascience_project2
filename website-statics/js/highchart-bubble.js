var chart = new Highcharts.chart({
    chart: {
      renderTo: 'highcharts-2',
      type: 'bubble',
      height: 400,
      width: 500,
  },
    data: {
      csvURL: 'https://raw.githubusercontent.com/Shanaida/project-2-csvs/master/macrobubble1.csv'
  },
    title: {
      text: 'S&P 500 Index Bubble Graph'
  }
});    
  