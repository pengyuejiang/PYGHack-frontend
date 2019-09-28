function twenty_five_score(year, data) {
  var ctx = document.getElementById("twenty_five_score").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
        label: 'Critical Reading',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        data: data[year]['SATVR25'],
      }, {
        label: 'Math',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        data: data[year]['SATMT25'],
      }]
    },
    options: {
      title: {
        display: true,
        text: year + ' SAT 25th percentile score'
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

function seventy_five_score(year, data) {
  var ctx = document.getElementById("seventy_five_score").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
        label: 'Critical Reading',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        data: data[year]['SATVR75'],
      }, {
        label: 'Math',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: data[year]['SATMT75'],
      }]
    },
    options: {
      title: {
        display: true,
        text: year + ' SAT 75th percentile score'
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

function twenty_five_score_act(year, data) {
  data = delete_act_empty(year, data);
  var ctx = document.getElementById("twenty_five_score_act").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
        label: 'English',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        data: data[year]['ACTEN25'],
      }, {
        label: 'Math',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        data: data[year]['ACTMT25'],
      }]
    },
    options: {
      title: {
        display: true,
        text: year + ' ACT 25th percentile score'
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

function seventy_five_score_act(year, data) {
  data = delete_act_empty(year, data);
  var ctx = document.getElementById("seventy_five_score_act").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
        label: 'English',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        data: data[year]['ACTEN75'],
      }, {
        label: 'Math',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        data: data[year]['ACTMT75'],
      }]
    },
    options: {
      title: {
        display: true,
        text: year + ' ACT 75th percentile score'
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

function delete_act_empty(year, data) {
  for (var i = 0; i < data[year]['ACTMT25'].length; i++) {
    if (data[year]['ACTMT25'][i] === '' || data[year]['ACTEN25'][i] === '') {
      console.log(1);
      data[year]['UNITID'].splice(i, 1);
      data[year]['ACTMT25'].splice(i, 1);
      data[year]['ACTMT75'].splice(i, 1);
      data[year]['ACTEN25'].splice(i, 1);
      data[year]['ACTEN75'].splice(i, 1);
      i--;
    }
  }
  return data;
}

function update(year, data) {
  return [
    twenty_five_score(year, data),
    seventy_five_score(year, data),
    twenty_five_score_act(year, data),
    seventy_five_score_act(year, data)
  ];
}

function click_update(u, year, data) {
  for (var i = 0; i < u.length; i++) {
    u[i].destroy();
  }
  return update(year, data);
}