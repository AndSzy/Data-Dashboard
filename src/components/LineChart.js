import { Line } from 'vue-chartjs'
 
export default {
  extends: Line,
  props: ['dataset','color'],
  data() {
      return {
        data: {
            datasets: [
                {
                    label: 'no label',
                    backgroundColor: this.color,
                    data: this.dataset,
                }
            ]
        },
        options: {
            animation: {
                duration: 0
            },
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    type: 'time',
                    distribution: 'linear',
                    ticks: {
                        source: 'auto',
                        autoSkip: true
                    }
                }]
            }
        }
      }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}