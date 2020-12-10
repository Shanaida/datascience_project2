Plotly.d3.csv('https://raw.githubusercontent.com/Shanaida/project-2-csvs/master/high_low_indexs.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) {return row[key]; });
    }
    var trace1= {
      name: "GOLD Index",
      x: unpack(rows, 'Date'),
      y: unpack(rows,'gold-low'),
      type: 'line',
      line: {
        color: 'rgb(233,233,17)',
        width: 3
        }
    }

    var trace2= {
        name: "IXIC Index",
        x: unpack(rows, 'Date'),
        y: unpack(rows,'ixic-low'),
        type: 'line',
        line: {
          color: 'rgb(37,183,255)',
          width: 3
          }
      }
    
    var trace3= {
        name: "GSPC Index",
        x: unpack(rows, 'Date'),
        y: unpack(rows,'gspc-low'),
        type: 'line',
        line: {
          color: 'rgb(0,192,6)',
          width: 3
          }
      }

   var data= [trace1, trace2, trace3];

   var layout = {
    showlegend: true,
    autosize: true,
    margin: {
      't':32,
      'b':60,
      'l':47,
      'r':10
    },
    title: {
      text:'Historical Stock Lows for each Index [Years 1996-2020]',
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
  
  Plotly.newPlot('plotly-6', data, layout, config)
});

// update the layout to expand to the available size
  // when the window is resized
  window.onresize = function() {
    Plotly.relayout('plotly-6', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
  };