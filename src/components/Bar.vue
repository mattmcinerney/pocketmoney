<script>
import { Bar } from 'vue-chartjs'
import { top10spend } from '../data/top10spend'

export default {
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: top10spend,
      datasets: [
        {
          label: 'Last 10 Transactions',
          backgroundColor: '#63ADF2',
          data: top10spend
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>