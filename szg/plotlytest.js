var trace1 = {
    name: 'GOLD Index',
    x: ['1-3-2019', '2-3-2019', '3-3-2019', '4-3-2019', '5-3-2019', '6-3-2019', '7-3-2019'],
    y: [10, 15, 13, 17, 19, 10, 11, 13],
    type: 'line',
    line: {
      color: '#E0E0E0'
    }
  };
  
  var trace2 = {
    name: 'IXIC Index',
    x: ['1-3-2019', '2-3-2019', '3-3-2019', '4-3-2019', '5-3-2019', '6-3-2019', '7-3-2019'],
    y: [16, 5, 11, 9, 0, 4, 0],
    type: 'line'
  };
  
  var data = [trace1, trace2];
  
  layout = {
      showlegend: false,
      autosize: true,
      margin: {
        't':2,
        'b':2
      }
  };
 
  var config = {
    displayModeBar: false,
    responsive: true
  }
  
  Plotly.newPlot('test', data, layout, config, { 
    displaylogo: false
  });

  // update the layout to expand to the available size
  // when the window is resized
  window.onresize = function() {
    Plotly.relayout('test', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
  };
