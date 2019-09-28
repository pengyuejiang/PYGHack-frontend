function by_ethnicity(year, data) {
  var ctx = document.getElementById("by_ethnicity").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
          label: 'American Indian or Alaska Native',
          data: data[year]['EFAIANT'],
          borderWidth: 1
        },
        {
          label: 'Asian',
          data: data[year]['EFASIAT'],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
        }, {
          label: 'Black or African American',
          data: data[year]['EFBKAAT'],
          backgroundColor: 'rgba(255, 206, 86, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Hispanic',
          data: data[year]['EFHISPT'],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Native Hawaiian or Other Pacific Islander',
          data: data[year]['EFNHPIT'],
          borderWidth: 1
        },
        {
          label: 'White',
          data: data[year]['EFWHITT'],
          backgroundColor: 'rgba(255, 159, 64, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Two or more races',
          data: data[year]['EF2MORT'],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Race/ethnicity unknown',
          data: data[year]['EFUNKNT'],
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Nonresident alien',
          data: data[year]['EFNRALT'],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: year + ' Fall Enrollment by Ethnicity'
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

function by_gender(year, data) {
  var ctx = document.getElementById("by_gender").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
          label: 'Male',
          data: data[year]['EFTOTLM'],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
        },
        {
          label: 'Female',
          data: data[year]['EFTOTLW'],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: year + ' Fall Enrollment by Gender'
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

function by_minority(year, data) {
  for (var i = 0; i < data[year]['EFBKAAT'].length; i++) {
    data[year]['EFBKAAT'][i] += data[year]['EFHISPT'][i];
    data[year]['EFBKAAT'][i] += data[year]['EFAIANT'][i];
  }

  for (var i = 0; i < data[year]['EFTOTLT'].length; i++) {
    data[year]['EFTOTLT'][i] -= data[year]['EFBKAAT'][i];
  }


  var ctx = document.getElementById("by_minority").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: data[year]['UNITID'],
      datasets: [{
          label: 'Minority (Hispanic, African American, Native American)',
          data: data[year]['EFBKAAT'],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderWidth: 1
        },
        {
          label: 'non-Minority',
          data: data[year]['EFTOTLT'],
          backgroundColor: '',
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: year + ' Fall Enrollment by Gender'
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
    by_gender(year, data),
    by_minority(year, data)
  ];
}

function click_update(u, year, data) {
  for (var i = 0; i < u.length; i++) {
    u[i].destroy();
  }
  return update(year, data);
}