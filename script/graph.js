d3.csv('covid26042020.csv').then(function(cases) { // Cases is the whole dataset
    //console.log(cases[0]);
    var locations = cases.map(pair => pair.Location); // Maps each location in pair variable and adds to array
    var total = cases.map(pair => pair.Total);
    var ctx = document.getElementById('a').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'horizontalBar',
  
      // The data for our dataset
      data: {
          labels: locations,
          datasets: [{
              label: 'Number of Cases',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: total,
          }], 
          
      },
     
      
      // Configuration options go here
      options: {
        
        hover: {
          animationDuration: 0
        },
        animation: {
                  duration : 1,
                  onComplete : function() {
                      var chartInstance = this.chart,
                      ctx = chartInstance.ctx;
  
                      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily);
                      ctx.textAlign = 'center';
                      ctx.textBaseline = 'bottom';
  
                      this.data.datasets.forEach(function(dataset, i) {
                          var meta = chartInstance.controller.getDatasetMeta(i);
                          meta.data.forEach(function(bar, index) {
                              if (dataset.data[index] > 0) {
                                  var data = dataset.data[index];
                                  ctx.fillText(data, bar._model.x + 10, bar._model.y + 8);
                              }
                          });
                          
                      });
                  }
              },
        
        scales: {
          xAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  
              }
          }],
          yAxes: [{
              gridLines: {
                  color: "rgba(0, 0, 0, 0)",
              }   
          }]
          
        }
      }
  });
  
  });
  
  
  
  
  