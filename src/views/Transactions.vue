<template>
  <div class="trans-chart flex-row">
        <line-chart v-if="loaded" :chartdata="chartdata"/>
  </div>
</template>

<script>
import axios from 'axios'
// import { data } from "../data/transactions"
import LineChart from "../components/Chart"
// import Bar from "../components/Bar"

export default {
  name: "Transactions",
  components: {
    LineChart,
  },
  data:() => ({
      loaded: false,
      chartdata: null
  }),
   async mounted () {
     this.loaded = false
    try {

      const res = await axios.get(`http://localhost:3000/top10spend`)
      console.log(res.data + "received")
      const data = {
        ...res.data,
        labels: Array.apply(null, Array(10)).map((_, i) => `${i + 1}th last transaction`)
      }
      this.chartdata = data
      this.loaded = true

    } catch(e) {
      console.log(e)
    }
  }
}
</script>
