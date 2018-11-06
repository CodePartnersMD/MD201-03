'use strict'

let elChartContainer = document.getElementById('chart-container')
let ctx = elChartContainer.getContext('2d')

function displayChart() {
    let elChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [heroes[0].title, heroes[1].title, heroes[2].title],
        datasets: [{
            label: '# of clicks',
            data: [heroes[0].clicked, heroes[1].clicked, heroes[2].clicked],
            backgroundColor: 'red',
          borderColor: 'red',
          borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
  })
}