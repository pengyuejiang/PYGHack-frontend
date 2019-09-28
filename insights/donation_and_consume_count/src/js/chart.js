function twenty_five_score(year, data) {
  var ctx = document.getElementById("twenty_five_score").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
        label: 'Consumed',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        data: data[year]['Consumed'],
      }, {
        label: 'Donated',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        data: data[year]['Donated'],
      }]
    },
    options: {
      title: {
        display: true,
        text: year + ' Donated and Consumed'
      },
      maintainAspectRatio: true,
      spanGaps: false,
      elements: {
        line: {
          tension: 0.000001
        }
      },
      plugins: {
        filler: {
          propagate: false
        },
        'samples-filler-analyser': {
          target: 'chart-analyser'
        }
      }
    }
  });

  return myChart;
}

function update(year, data) {
  return [
    twenty_five_score(year, data),
  ];
}

function click_update(u, year, data) {
  for (var i = 0; i < u.length; i++) {
    u[i].destroy();
  }
  return update(year, data);
}