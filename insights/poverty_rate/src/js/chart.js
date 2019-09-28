function by_ethnicity(year, data) {
  var ctx = document.getElementById("by_ethnicity").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [ 
        {
          label: 'Percent below poverty (%)',
          data: data[year]['poverty'],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: year + ' Poverty Rate in Illinois'
      },
      scales: {
        xAxes: [{
          stacked: true
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });


  return myChart;
}


function update(year, data) {
  return [
    by_ethnicity(year, data),
  ];
}

function click_update(u, year, data) {
  for (var i = 0; i < u.length; i++) {
    u[i].destroy();
  }
  return update(year, data);
}