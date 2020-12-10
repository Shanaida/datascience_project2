Plotly.d3.csv('https://raw.githubusercontent.com/Shanaida/project-2-csvs/master/GSPC.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) {return row[key]; });
    }

var trace1 = {
  
    x: unpack(rows, 'Date'), 
    
    close: unpack(rows,'Close'), 
    
    decreasing: {line: {color: '#7F7F7F'}}, 
    
    high: unpack(rows,'High'),
    
    increasing: {line: {color: '#17BECF'}}, 
    
    line: {color: 'rgba(31,119,180,1)'}, 
    
    low: unpack(rows,'Low'), 
    
    open: unpack(rows,'Open'), 
    
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  };
  
  var data = [trace1];
  
  var layout = {
    dragmode: 'zoom', 
    margin: {
      r: 10, 
      t: 25, 
      b: 40, 
      l: 60
    }, 
    showlegend: false, 
    xaxis: {
      autorange: false, 
      domain: [0, 1], 
      range: ['2017-01-01 12:00', '2020-11-01 12:00'], 
      rangeslider: {range: ['2017-01-01 12:00', '2020-11-01 12:00']}, 
      title: 'Date', 
      type: 'date'
    }, 
    yaxis: {
      autorange: true, 
      domain: [0, 1], 
      //range: [114.609999778, 137.410004222], 
      type: 'linear'
    },
    autosize: true,
    margin: {
      't':32,
      'b':60,
      'l':47,
      'r':10
    },
    title: {
      text:'GSPC Index Stock Chart [Past 3 Years]',
      font: {
        family: 'Arial, sans-serif',
        size: 18
      }
    }
  };

  var config = {
    displayModeBar: false,
    responsive: true
}
  
  Plotly.newPlot('candlestick', data, layout, config)
});