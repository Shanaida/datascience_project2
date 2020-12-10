Plotly.d3.csv('https://raw.githubusercontent.com/Shanaida/project-2-csvs/master/GSPC.csv', function(err, rows){
    function unpack(rows, key) {
      return rows.map(function(row) {return row[key]; });
    }
    var trace1= {
      type: 'bar',
      name: "GSPC Index",
      marker: {
        color: 'rgb(0,192,6)',
        opacity: 0.8,
        },
      x: unpack(rows, 'Date'),
      y: unpack(rows,'Volume')
    }

   var data= [trace1]

   var layout = {
    showlegend: false,
    autosize: true,
    margin: {
      't':32,
      'b':38,
      'l':47,
      'r':10
    },
    title: {
      text:'GSPC Index Stock Volume [Years 1996-2020]',
      font: {
        family: 'Arial, sans-serif',
        size: 18
      }
    },
    xaxis: {
        title: 'Date',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 10,
          color: 'grey'
        }
    },
    yaxis: {
        title: 'Volume (millions)',
        titlefont: {
          family: 'Arial, sans-serif',
          size: 10,
          color: 'grey'
        }
    }
};
    var config = {
        displayModeBar: false,
        responsive: true
    }
  
  Plotly.newPlot('plotly-4', data, layout, config)
});

// update the layout to expand to the available size
  // when the window is resized
  window.onresize = function() {
    Plotly.relayout('plotly-4', {
        'xaxis.autorange': true,
        'yaxis.autorange': true
    });
  };