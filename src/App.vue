<template>
<div class="app-container">
  <SideBar></Sidebar>
        <div class="container">
            <h1>November - October transactions</h1>
            <div class="content">
              <Chart class="trans-chart" chartdata="chartData"></Chart>
            </div>
        </div>
</div> 
</template>



<script>
import { data } from './data/transactions.js'
import SideBar from './components/SideBar.vue'
import Chart from './components/Chart.vue'
export default {
  name: 'app',
  props:['rows'],
  components: {
    SideBar,
    Chart
  },
  data() {
    var chartData = data.map(d => d.split(",")[3]).reverse();
    return {
      chartData
    }
  }
}
</script>

<style>
  @import '/src/style/main.css';
</style>
